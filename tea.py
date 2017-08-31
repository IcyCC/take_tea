from monk import Monk
from model import Tea
from monk_sqlalchemy import conn
import asyncio

app = Monk()

sql_config = dict(host='127.0.0.1',
                  port=3306,
                  user='root',
                  password='root',
                  db='take_tea',
                  charset='utf8',
                  autocommit=True,
                  maxsize=10,
                  minsize=1,
                 )

loop = asyncio.get_event_loop()
loop.run_until_complete(conn.connection(loop=loop, **sql_config))


@app.route('/', methods=['GET'])
async def index(request):
    resp = await app.file(file="index.html")
    return resp


@app.route("/tea", methods=['GET', 'POST'])
async def get_tea(request):
    if request.method == 'GET':
        tea_id = request.args.get('id')
        tea = await Tea.find_by(id=tea_id)
        if tea is None:
            return Monk.jsonfy(result=[])
        else:
            return Monk.jsonfy(result=[tea[0].to_json()])

    return app.jsonfy()


@app.route('/tea_answer', methods=['GET'])
async def get_answer(request):
    args = request.args
    age = int(args.get('age'))
    taste_q = args.get('taste')
    function_q = args.get('function')
    teas = await Tea.all()
    ans = [t.to_json() for t in teas if t.age_down < age < t.age_up]
    return app.jsonfy(result=ans)

app.run()