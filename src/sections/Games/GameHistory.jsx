import React, { useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";


function GameHistory({ history }) {
  useEffect(() => {
    // Scroll to the top of the history list when new data is added
    document.getElementById("history-container").scrollTop = 0;
  }, [history]);

  return (
    <div id="history-container" className="history-container">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Random Number</th>
            <th className="py-2">Period</th>
            <th className="py-2">Background</th>
            <th className="py-2">Color</th>
          </tr>
        </thead>
        <tbody>
          <TransitionGroup component={null}>
            {history.map((entry, index) => (
              <CSSTransition key={index} timeout={500} classNames="fade">
                <tr>
                  <td className="py-2">{entry.random_number}</td>
                  <td className="py-2">{entry.period}</td>
                  <td className="py-2">{entry.bg}</td>
                  <td className="py-2">{entry.color}</td>
                </tr>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </tbody>
      </table>
    </div>
  );
}

export default GameHistory;
