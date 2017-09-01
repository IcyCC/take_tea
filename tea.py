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
        if tea_id is None:
            teas = await Tea.all()
            return Monk.jsonfy(result=[t.to_json() for t in teas])
        tea = await Tea.find_by(id=tea_id)
        if tea is None:
            return Monk.jsonfy(result=[])
        else:
            return Monk.jsonfy(result=[tea[0].to_json()])

    if request.method == 'POST':
        form = request.form
        try:
            d = dict(
                name=form.get('name'),
                taste=form.get('taste'),
                function=form.get('function'),
                age_up=int(form.get('age_up')),
                age_down=int(form.get('age_down')),
                taste_q=form.get('taste_q'),
                function_q=form.get('function_q'),
                image_url=form.get('image_url')
            )
            t = Tea(**d)
            await t.save()
        except Exception:
            return app.jsonfy(status="fail")
        return app.jsonfy(status="success")


@app.route('/tea_answer', methods=['GET'])
async def get_answer(request):
    args = request.args
    age = int(args.get('age'))
    taste_q = args.get('taste')
    function_q = args.get('function')
    teas = await Tea.all()
    ans = [t for t in teas if t.age_down < age < t.age_up]
    if not ans:
        return app.jsonfy(result=[], reason="Not match age")
    if taste_q is not None:
        ans = [t for t in ans if t.taste_q == taste_q]
        if not ans:
            return app.jsonfy(result=[], reason="Not match taste")
    if function_q is not None:
        ans = [t for t in ans if t.function_q == function_q]
        if not ans:
            return app.jsonfy(result=[], reason="Not match taste")
    return app.jsonfy(result=[t.to_json() for t in ans])

app.run(host='0.0.0.0', port=10086)