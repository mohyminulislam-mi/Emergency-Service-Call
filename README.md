**Emergency Service Directory**

🌐 Live Link: https://mohyminulislam-mi.github.io/Emergency-Service-Call/

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

   Answer: DOM selectors are tools used in web development to find and interact with specific elements on a webpage. Think of a webpage as a big tree of elements—like headings, paragraphs, buttons, and images. These selectors are essential for making webpages interactive and dynamic using JavaScript.

2. How do you create and insert a new element into the DOM?

   Answer: To create and insert a new Element into dom frist we have to create the element using document.createElement('div') .Then append the element into the parent using document.getElementById() .appendChild().

3. What is Event Bubbling and how does it work?

   Answer: Event Bubbling is a mechanism where i click on a button inside a div and it bubbling up to it's parent until the root.The div is inside the body. Their order is (body > div > button) .Now i click on the button and event tigger but now it bubbling up to it's parent and if any event listner exist the event tigger and go on until the root.

4. What is Event Delegation in JavaScript? Why is it useful?

   Answer: Event Delegation is a technique where you can attast a event listner on Parent element and Then target the child element through the parent event listner. So, you don't need to add multiple event listner on child to target them.

5. What is the difference between preventDefault() and stopPropagation() methods?

   Answer: In JavaScript, preventDefault() and stopPropagation() are two methods. and this method control how events behave on a webpage. When you use preventDefault(), you're telling the browser not to do its usual action for that event.On the other hand, stopPropagation() stops the event from bubbling up to parent elements.
