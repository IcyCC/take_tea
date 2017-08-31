import asyncio
from monk_sqlalchemy import orm


class Tea(orm.Model):
    id = orm.Integer(primary_key=True)
    name = orm.String(legth=255, default='')
    taste = orm.String(legth=1024, default='')
    function = orm.Text()
    age_up = orm.Integer(default=0)
    age_down = orm.Integer(default=0)
    taste_q = orm.String(legth=1024, default='')
    function_q = orm.String(legth=1024, default='')

    def to_json(self):
        return dict(
            id=self.id,
            name=self.name,
            taste=self.taste,
            function=self.function,
            age_up=self.age_up,
            age_down=self.age_down,
            taste_q=self.taste_q,
            function_q=self.function_q
        )

