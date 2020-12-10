class Crazy:
    def __init__(self, val):
        self.v = val

    def __add__(self, other):
        return self.v + other

    def _radd__(self, other):
        return Crazy(self.v + other)

    def __str__(self):
        return str(self.v)


c3 = Crazy(33)
print(c3)

c3 = 100 + c3
print(c3)
