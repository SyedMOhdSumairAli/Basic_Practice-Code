import turtle

t = turtle.Turtle()
t.speed(50)
turtle.bgcolor("white")
colors = ('black','pink', 'blue','green','purple')

for i in range(360):
    t.pencolor(colors[i%5])
    t.width(i/100+1)
    t.goto(0,0)
    t.pendown
    t.forward(100)
    t.right(59)
    t.forward(200)