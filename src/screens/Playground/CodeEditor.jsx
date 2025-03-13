import React, { useState, useEffect, useMemo, useCallback } from 'react'
// npm i @uiw/react-codemirror
import CodeMirror from '@uiw/react-codemirror'
// npm i @uiw/codemirror-theme-bespin @uiw/codemirror-theme-duotone @uiw/codemirror-theme-dracula @uiw/codemirror-theme-github @uiw/codemirror-theme-xcode @uiw/codemirror-theme-vscode @uiw/codemirror-theme-okaidia

// theme
import { githubDark, githubLight } from '@uiw/codemirror-theme-github'
import { bespin } from '@uiw/codemirror-theme-bespin'
import { duotoneDark, duotoneLight } from '@uiw/codemirror-theme-duotone'
import { dracula } from '@uiw/codemirror-theme-dracula'
import { xcodeDark, xcodeLight } from '@uiw/codemirror-theme-xcode'
import { vscodeDark } from '@uiw/codemirror-theme-vscode'
import { okaidia } from '@uiw/codemirror-theme-okaidia'


import { cpp } from '@codemirror/lang-cpp'
import { java } from '@codemirror/lang-java'
import { javascript } from '@codemirror/lang-javascript'
import { python } from '@codemirror/lang-python'
import { rust } from '@codemirror/lang-rust'

import { indentUnit } from '@codemirror/language'
import { EditorState } from '@codemirror/state'

const CodeEditor = ({
    currentLanguage,
    currentTheme,
    currentCode,
    setCurrentCode
}) => {

    const [theme, setTheme] = useState(githubDark)
    const [language, setLanguage] = useState(javascript);

    useEffect(() => {
        if (currentLanguage === 'cpp') setLanguage(cpp);
        if (currentLanguage === 'java') setLanguage(java);
        if (currentLanguage === 'javascript') setLanguage(javascript);
        if (currentLanguage === 'typescript') setLanguage(javascript({ jsx: true, typescript: true }));
        if (currentLanguage === 'python') setLanguage(python);
        if (currentLanguage === 'rust') setLanguage(rust);
    }, [currentLanguage])


    useEffect(() => {
        if (currentTheme === 'githubDark') setTheme(githubDark);
        if (currentTheme === 'githubLight') setTheme(githubLight);
        if (currentTheme === 'bespin') setTheme(bespin);
        if (currentTheme === 'duotoneDark') setTheme(duotoneDark);
        if (currentTheme === 'duotoneLight') setTheme(duotoneLight);
        if (currentTheme === 'dracula') setTheme(dracula);
        if (currentTheme === 'xcodeDark') setTheme(xcodeDark);
        if (currentTheme === 'xcodeLight') setTheme(xcodeLight);
        if (currentTheme === 'vscodeDark') setTheme(vscodeDark);
        if (currentTheme === 'okaidia') setTheme(okaidia);
    }, [currentTheme])

    // Memoize the onChange handler to prevent unnecessary re-renders
    const handleChange = useCallback((value) => {
        setCurrentCode(value);
    }, [setCurrentCode]);

    // Memoize the extensions to prevent unnecessary re-creation
    const extensions = useMemo(() => [
        language,
        indentUnit.of("        "),
        EditorState.tabSize.of(8),
        EditorState.changeFilter.of(() => true)
    ], [language]);

    return (
        <CodeMirror
            value={currentCode}
            height="100%"
            theme={theme}
            extensions={extensions}
            onChange={handleChange}
            basicSetup={{
                lineNumbers: true,
                highlightActiveLineGutter: true,
                highlightSpecialChars: true,
                history: true,
                foldGutter: true,
                drawSelection: true,
                dropCursor: true,
                allowMultipleSelections: true,
                indentOnInput: true,
                syntaxHighlighting: true,
                bracketMatching: true,
                closeBrackets: true,
                autocompletion: true,
                rectangularSelection: true,
                crosshairCursor: true,
                highlightActiveLine: true,
                highlightSelectionMatches: true,
                closeBracketsKeymap: true,
                defaultKeymap: true,
                searchKeymap: true,
                historyKeymap: true,
                foldKeymap: true,
                completionKeymap: true,
                lintKeymap: true,
            }}
        />
    )
}

// Wrap with React.memo to prevent unnecessary re-renders
export default React.memo(CodeEditor)