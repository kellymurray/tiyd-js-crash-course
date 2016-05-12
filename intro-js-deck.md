build-lists: true
![fit](http://i.imgur.com/qvZMscb.png)

---
# [fit] Introduction to JavaScript

### Hosted by The Iron Yard

---

## Who Am I?

* Started coding at 12
* Taught first HTML class when I was 13
* Became a Front-End Developer
* Taught three years at NC State University
* Taught at Dev Bootcamp in San Francisco
* Been with The Iron Yard since 2014

---

## What is JavaScript?

> Well, it's not Java!

JavaScript is a computer programming language commonly used to create interactive effects within web browsers.

What does this mean? Check it [out](http://codepen.io/twhitacre/full/MwKXxz/)!


---

## So, What is Programming?

Writing instructions for your computer to execute at a later time.

---

## The Web is Built on Programming

* The Content Layer (HTML) - The Skeleton
* The Design Layer (CSS) - The Skin
* The Interactive Layer (JavaScript) - The Organs

---

## What Is JavaScript Used For?

- Adding Fancy Page Interactions - [here](http://finegoodsmarket.com/view)
- Full Featured Web Apps - [here](https://play.spotify.com/browse)
- Drawing & Animations - [here](http://animateddata.co.uk/lab/d3-tree/)
- Interactive elements - [here](https://davidwalsh.name/codepen-demos)
- Build a full backend - [here](http://nodejs.org/)


---

### Data Types

* `Number` looks like: *1* or *500* or *3.14*
* `String` looks like "Any Message in Quotes"
* `Boolean` looks like *true* or *false*
* `Null` is an empty value: *null*
* `Undefined` is the absence of a value: *undefined*

---

You can do lots of cool things with JavaScript...like math!

- Add `1 + 2`
- Subtract `1 - 2`
- Negate `-3`
- Divide `4 / 2`
- Multiply `4 * 2`
- Mod `4 % 2` yields the remainder (0, in this case)

---

You can even do some fancy tricks.

Get random number:
  - Between 0 and 1 `Math.random()`
  - Between 1 and 10 (inclusive) `Math.floor(Math.random() * 10) + 1`

Try it using repl.it!

What do you think `Math.ceil(Math.random() * 10) + 1` does?

---

###  Variables
* Are named values
* You can change the value of a variable

```javascript
var firstName = 'Kelly';
```

---

### Let's try it out

In repl.it, type:

```javascript
var helloWorld = "Hello, World!"
```

Then press enter and type:

```javascript
helloWorld
```

What happened?

---

Now try:

```javascript
var helloCat = "Hello, this is a cat"

helloCat + "!!!"
```

What happens?

---

### Functions

What if I want to make other sentences exciting? Manually updating the variable isn't very efficient, and programming is all about efficiency.

Instead, I'll use a function.

A function is a named block of instructions.

---

Let's try it ourselves!

In repl.it, type:

```JavaScript
function makeMoreExciting(string) {
  return string + '!!!!'
}

makeMoreExciting('Hello, this is a cat')
```
What happens? Try it yourself, then insert your own string.

---

# [fit] Now Let's Build Something!

---

# [fit] Thanks for coming!
