import React, { useEffect, useState } from "react";
import portrait from "./image.jpg";

export default function CMD() {
  const [inputValue, setInputValue] = useState("");
  const [logs, setLogs] = useState([]);
  const [queries, setQueries] = useState([]);
  const [trc, setTrc] = useState(0);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Get the value from the input field
      const enteredValue = inputValue;
      console.log("You pressed Enter with the value: ", enteredValue);

      // Create a new log entry
      if (inputValue == "") {
        console.log("empty");
      } else if (enteredValue.toLowerCase() === "start") {
        const logEntry = (
          <code key={logs.length}>
            portfolio@chowdhuryisfatulkarim - ~ -{" "}
            <span style={{ color: "green" }}>master</span> ~$ {enteredValue}
            <br />
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  flex: "3",
                  textAlign: "justify",
                  paddingRight: "10px",
                  paddingTop: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span style={{ fontWeight: "bold", fontSize: "22px" }}>
                  Chowdhury Isfatul Karim
                </span>
                <br />
                <span style={{ fontSize: "12px" }}>
                  Computer Science and Engineering @ BRAC University |
                  Co-founder @ PixL. | React Developer
                </span>
                <br />
                <br />
                <div style={{ maxWidth: "800px" }}>
                  I am a Computer Science and Engineering student at{" "}
                  <a href="https://www.bracu.ac.bd/">BRAC University</a> with a
                  CGPA of 3.67/4.00. I am passionate about software development
                  and have a strong track record of success in working with
                  clients from the US and Mexico. I am proficient in the MERN
                  stack and have experience with a variety of other
                  technologies. I am a highly motivated and self-driven
                  individual with a strong work ethic. I am also a team player
                  and I am able to work independently. I am confident that I can
                  make a significant contribution to any team and help them
                  achieve their goals. I am eager to learn and grow in my
                  career, and I am always looking for new challenges. I am also
                  excited to work with companies that are at the forefront of
                  technology.
                  <br />
                  <br />
                </div>
                <div
                  style={{
                    border: "1px solid green",
                    padding: "10px 20px",
                    margin: "10px",
                    maxWidth: "700px",
                  }}
                >
                  This is an interactive terminal themed portfolio. You can type
                  commands or click on any section mentioned below to navigate
                  and explore.
                  <br />
                  Type "help" to see commands list.
                </div>

                <div
                  style={{
                    flex: "1",
                    textAlign: "center",
                    maxWidth: "800px",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                  }}
                >
                  <a href="#">Resume</a> / <a href="#">Email</a> /{" "}
                  <a href="#">Github</a> / <a href="#">LinkedIn</a> /{" "}
                  <a
                    href="https://www.facebook.com/isfatul.karim/"
                    target="_blank"
                  >
                    Facebook
                  </a>{" "}
                  / <a href="#">WhatsApp</a> / <a href="#">X</a>
                  <br />
                  <a href="#">Experience</a> / <a href="#">Education</a> /{" "}
                  <a href="#">Research</a> / <a href="#">Research Interest</a> /{" "}
                  <a href="#">Skills</a> <br />
                  <a href="#">Honors & Awards</a> /{" "}
                  <a href="#">Academic Projects</a> /{" "}
                  <a href="#">Co-curricular Activities</a> /{" "}
                  <a href="#">Miscellaneous</a>
                </div>
              </div>
              <div
                style={{
                  flex: "1",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={portrait}
                  style={{ height: "400px", borderRadius: "50px" }}
                ></img>
              </div>
            </div>
          </code>
        );
        // Append the log entry to the logs array
        setLogs([...logs, logEntry]);
      } else if (enteredValue.toLowerCase() === "help") {
        const logEntry = (
          <code key={logs.length}>
            portfolio@chowdhuryisfatulkarim - ~ -{" "}
            <span style={{ color: "green" }}>master</span> ~$ {enteredValue}
            <br />
            <span>
              &lt;command&gt;
              <br />
              <br />
              Usage:
              <br />
              <br />
              start - introduction <br />
              help - see commands list <br />
              clear - clear the screen <br />
              <br />
              <br />
              All commands:
              <br />
              <br />
              <span style={{ marginLeft: "20px" }}>
                access, adduser, audit, bugs, cache, ci, completion,
                <br />
                config, dedupe, deprecate, diff, dist-tag, docs, doctor,
                <br />
                edit, exec, explain, explore, find-dupes, fund, get, help,
                <br />
                help-search, hook, init, install, install-ci-test,
                <br />
                install-test, link, ll, login, logout, ls, org, outdated,
                <br />
                owner, pack, ping, pkg, prefix, profile, prune, publish,
                <br />
                query, rebuild, repo, restart, root, run-script, search,
                <br />
                set, shrinkwrap, star, stars, start, stop, team, test,
                <br />
                token, uninstall, unpublish, unstar, update, version, view,
                <br />
                whoami
                <br />
              </span>
              <br />
              Specify configs in the ini-formatted file:
              <br />
              /Users/chowdhuryisfatulkarim/.npmrc
              <br />
              or on the command line via: npm &lt;command&gt; --key=value
              <br />
              <br />
              More configuration info: npm help config
              <br />
              Configuration fields: npm help 7 config
              <br />
              npm@9.6.7 /usr/local/lib/node_modules/npm
            </span>
          </code>
        );
        // Append the log entry to the logs array
        setLogs([...logs, logEntry]);
      } else if (enteredValue.toLowerCase() === "experience") {
        const logEntry = (
          <code key={logs.length}>
            portfolio@chowdhuryisfatulkarim - ~ -{" "}
            <span style={{ color: "green" }}>master</span> ~$ {enteredValue}
            <br />
            <span>
              &lt;command&gt;
              <br />
              <br />
              Usage:
              <br />
              <br />
              start - introduction <br />
              help - see commands list <br />
              clear - clear the screen <br />
              <br />
              <br />
              All commands:
              <br />
              <br />
              <span style={{ marginLeft: "20px" }}>
                access, adduser, audit, bugs, cache, ci, completion,
                <br />
                config, dedupe, deprecate, diff, dist-tag, docs, doctor,
                <br />
                edit, exec, explain, explore, find-dupes, fund, get, help,
                <br />
                help-search, hook, init, install, install-ci-test,
                <br />
                install-test, link, ll, login, logout, ls, org, outdated,
                <br />
                owner, pack, ping, pkg, prefix, profile, prune, publish,
                <br />
                query, rebuild, repo, restart, root, run-script, search,
                <br />
                set, shrinkwrap, star, stars, start, stop, team, test,
                <br />
                token, uninstall, unpublish, unstar, update, version, view,
                <br />
                whoami
                <br />
              </span>
              <br />
              Specify configs in the ini-formatted file:
              <br />
              /Users/chowdhuryisfatulkarim/.npmrc
              <br />
              or on the command line via: npm &lt;command&gt; --key=value
              <br />
              <br />
              More configuration info: npm help config
              <br />
              Configuration fields: npm help 7 config
              <br />
              npm@9.6.7 /usr/local/lib/node_modules/npm
            </span>
          </code>
        );
        // Append the log entry to the logs array
        setLogs([...logs, logEntry]);
      } else if (enteredValue === "clear") {
        setLogs([]);
      } else {
        const logEntry = (
          <code key={logs.length}>
            portfolio@chowdhuryisfatulkarim - ~ -{" "}
            <span style={{ color: "green" }}>master</span> ~$ {enteredValue}
            <br />
            <span style={{ color: "red" }}>
              command not found: {enteredValue}
            </span>
          </code>
        );
        // Append the log entry to the logs array
        setLogs([...logs, logEntry]);
      }

      if (inputValue != "") {
        setQueries([inputValue, ...queries]);
      }
      console.log(queries[0]);
      setTrc(0);
      // Clear the input field
      setInputValue("");
    }
  };

  document.addEventListener("keydown", (ev) => {
    if (ev.key == "ArrowUp") {
      if (queries[trc]) {
        setInputValue(queries[trc]);
        setTrc(trc + 1);
        if (trc >= queries.length) {
          setTrc(0);
        }
      }
    } else if (ev.key == "ArrowDown") {
      if (queries[trc]) {
        setInputValue(queries[trc]);
        setTrc(trc - 1);
        if (trc < 0) {
          setTrc(0);
        }
      }
    }
  });

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const elem = document.getElementById("scr");
    window.scrollTo(elem.offsetLeft, elem.offsetTop);
  }, [logs]);

  return (
    <div
      style={{
        color: "white",
        background: "black",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        height: "max-content",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <code>
        Welcome to the interactive portfolio of Chowdhury Isfatul Karim.
      </code>
      <code>Type "start" below to continue. Type "help" for more.</code>
      <div style={{ height: "10px" }}></div>
      <div>
        {logs.map((log, index) => (
          <div key={index}>{log}</div>
        ))}
      </div>
      <div>
      <code
        id="scr"
        style={{ display: "flex", flexDirection: "row", flex: "1" }}
      >
        <div>
          portfolio@chowdhuryisfatulkarim - ~ -{" "}
          <span style={{ color: "green" }}>master</span> ~${" "}
        </div>
        <input
          className="input1"
          id="inp1"
          autoFocus
          style={{
            background: "none",
            paddingLeft: "5px",
            border: "none",
            flex: "1",
            caretShape: "block",
            color: "white",
            fontSize: "12pt",
            width: "auto",
            fontFamily:
              "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
          }}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          spellCheck="false"
          type="text"
        />
      </code></div>
    </div>
  );
}
