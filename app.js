
    const parent =React.createElement("div",{id:"parent"},[
        React.createElement("div",{id:"child1"}, [
            React.createElement("h1",{id:"heading"},"hello world"),
            React.createElement("h2",{id:"heading1"},"hello world test")
        ]),
        React.createElement("div",{id:"child2"}, [
            React.createElement("h1",{id:"heading3"},"hello world2"),
            React.createElement("h2",{id:"heading4"},"hello world test3")
        ])
    ]
)

    const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent)
    