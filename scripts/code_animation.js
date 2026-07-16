const fileName = document.getElementById("fileName");

const files = [

    {
        name: "Welcome.cs",

        lines:
            [
                'Console.WriteLine("Hello World. Welcome to my portfolio.");',
                '',
                'Console.WriteLine("Thanks for visiting.");',
                '',
                'Console.WriteLine("Feel free to explore my projects and experience.");'
            ]
    },

    {
        name: "AboutMe.cs",

        lines:
            [
                'public class Michael_Garner',
                '{',
                '    public const string Title =',
                '        "Software Engineer and Multi-Disciplinary Technologist";',
                '    // Passionate about creating solutions that improve lives',
                '    // through software, engineering and automation.',
                '    // People-first philosophy.',
                '}'
            ]
    },

     {
        name: "Credentials.cs",

        lines:
            [
                'public string[] Credentials = {',
                '    // B. Eng. ',
                '    "Software Engineering"',
                '    // DEP / AVS ',
                '    "Automated Systems Electro-Mechanic";',
                '    //15+ Years Experience',
                '    "Electronic Technician";',
            '}'
            ]
    },

    {
        name: "Technologies.cs",

        lines:
            [
              'public class Technologies',
                '{',
                    'string[] Languages = { "C", "C++", "C#", "Java", "TypeScript", "Python", "SQL" };',
                    'string[] Web = { "HTML", "CSS", "JavaScript", "PHP", "XML" };',
                    'string[] Microsoft = { "Power Platform", "PowerShell", ".NET", "SharePoint", "M365", "Azure" };',
                    'string[] Tools = { "Django", "React", "React Native", "Flask", "GitHub" };',
                '}'
            ]
    }

];

const codeElement = document.getElementById("typedCode");

let currentFile = 0;
let line = 0;
let character = 0;

const keywordRegex =
    /\b(using|public|class|string|int)\b/g;

function colourize(text) {
    text = text.replace(keywordRegex,
        '<span class="keyword">$1</span>');

    text = text.replace(/"(.*?)"/g,
        '<span class="string">"$1"</span>');

    text = text.replace(/\b([0-9]+)\b/g,
        '<span class="number">$1</span>');

    text = text.replace(/(\/\/.*)/g,
        '<span class="comment">$1</span>');

    return text;
}

function type() {

    const currentLines = files[currentFile].lines;
    const currentLine = currentLines[line];

    if (line >= currentLines.length) {
        currentFile++;

        if (currentFile >= files.length) {
            currentFile = 0;
        }

        setTimeout(() => {
            codeElement.innerHTML = "";

            line = 0;
            character = 0;
            fileName.textContent = files[currentFile].name;
            type();

        }, 4000);

        return;
    }


    character++;

    const visible = currentLine.substring(0, character);
    const html = colourize(visible);
    const lines = currentLines.slice(0, line)

    lines.push(html + '<span class="cursor"></span>');

    codeElement.innerHTML = lines.join("\n");

    if (character < currentLine.length) {
        setTimeout(type,
            18 + Math.random() * 40);
    }
    else {
        character = 0;
        line++;
        setTimeout(type, 250);
    }
}

fileName.textContent = files[0].name;

type();