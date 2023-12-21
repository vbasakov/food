import React from 'react';
import './App.css';
import $ from 'jquery';

$("button").click(function(){
    $.get("demo_test.asp", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});

function App() {
  return (
    <div className="App">
      <div id="div1">
        <h2>Let jQuery AJAX Change This Text</h2>
      </div>
      <button>Get External Content</button>
    </div>
  );
}

export default App;
