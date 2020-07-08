import React from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';

const initialMarkdown = `

# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)

Marked - Markdown Parser
========================
inline code, a code block, a list item, a blockquote
[Marked] lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

How To Use The Demo
-------------------

# 1. Type in stuff on the left.
## 2. See the live updates on the right.

this is a inline \`<div>Hello, World!<br></div>\`

block of code:

\`\`\`
  for (let i=0; range(5) i++) {
    console.log("Hello World");
  }
  
\`\`\`

That's it.  Pretty simple.  There's also a drop-down option in the upper right to switch between various views:

- **Preview:**  A live display of the generated HTML as it would render in a browser.
- **HTML Source:**  The generated HTML before your browser makes it pretty.
- **Lexer Data:**  What [marked] uses internally, in case you like gory stuff like this.
- **Quick Reference:**  A brief run-down of how to format things using markdown.

Why Markdown?
-------------

It's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

Ready to start writing?  Either start changing stuff on the left or
[clear everything](/demo/?text=) with a simple click.

[Marked]: https://github.com/markedjs/marked/
[Markdown]: http://daringfireball.net/projects/markdown/

![freeCodeCamp](https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png)
`



class App extends React.Component {
  state = {
    text: initialMarkdown
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value

    })
    console.log(this.state.text);
  }

  render() {
    let { text } = this.state;
    let markdown = marked(text, { breaks: true });
    return (
      <div className="App">
        <div className=".App-header container-fluid">
          <h1>Convert your Markdown</h1>
        </div>
        <div className="main row">
          <div className="container">
            <div className="">
              <h6>Enter your markdown:</h6>
              <textarea id="editor" className="form-control p-2" value={text} onChange={this.handleChange} />
            </div>
          </div>
          <div className="container">
            <div className="">
              <h6>See the result:</h6>
              <div id="preview" className="preview rounded p-2" dangerouslySetInnerHTML={{__html: markdown}} contenteditable>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}




export default App;
