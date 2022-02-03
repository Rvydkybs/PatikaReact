import  './index.css';
import React from "react";
import {useState} from "react";

function MyToDoList() {
   
    const[done,setDone]=useState(0);
    const[actives,setActives]=useState(3);
    const[many,setMany]=useState();
	var box=document.querySelectorAll(".toggle");
    // var box2=document.querySelector("#box2");
    // var box3=document.querySelector("#box3");
    const completed=()=>{
        //if(box1.checked||box2.checked||box3.checked==true)
          box.forEach(function (element) {
			  if(element.checked==true)
			  {
				setDone(done+1);
				setActives(actives-1);
				if(actives==0)
					setActives(actives=0);
			  }
		  })
		
	}
	const completeClear=()=>{//çalıştıktan sonra tekrar seçilenler çizilmiyor
		setDone(0);
		document.getElementById("1").className="openAgain";
		document.getElementById("box1").checked=false;
		document.getElementById("2").className="openAgain";
		document.getElementById("box2").checked=false;
		document.getElementById("3").className="openAgain";
		document.getElementById("box3").checked=false;

	}
	const getActives=()=>{
		var r1=document.getElementById("box1").checked;
		var r2=document.getElementById("box2").checked;
		var r3=document.getElementById("box3").checked;
		var a=[r1,r2,r3];
		a.forEach(function (params) {
			if(params==false){
				<div className="view" >
					<input className="toggle" type="checkbox"  id={params} onChange={completed} />  
					<label className="strikethrough" id="1">Learn JavaScript</label>
					<button className="destroy" ></button>
				</div>
			}
		})
	}
    return(
        <>
            <section className="todoapp">
	<header className="header">
		<h1>todos</h1>
		<form>
			<input className="new-todo" placeholder="What needs to be done?" />
		</form>
	</header>
	<section className="main">
		<input className="toggle-all" type="checkbox"  />
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>

		<ul className="todo-list">
			<li >
				<div className="view" >
					<input className="toggle" type="checkbox"  id="box1" onChange={completed} />
					<label className="strikethrough" id="1">Learn JavaScript</label>
					<button className="destroy" ></button>
				</div>
			</li>
			<li>
				<div className="view">
					<input className="toggle" type="checkbox"  id="box2" onChange={completed}/>
					<label className="strikethrough" id="2">Learn React</label>
					<button className="destroy"></button>
				</div>
			</li>
			<li>
				<div className="view">
					<input className="toggle" type="checkbox"  id="box3" onChange={completed}/>
					<label className="strikethrough" id="3">Have a beautiful life!</label>
					<button className="destroy"></button>
				</div>
			</li>
		</ul>
	</section>

	<footer className="footer">

		<span className="todo-count">
			<strong>{actives}</strong>
			items left
		</span>

		<ul className="filters">
			<li>
				<a className="selected">All</a>
			</li>
			<li>
				<a onClick={getActives}>Active</a>
			</li>
			<li>
				<a>Completed:{done}</a>
			</li>
		</ul>

		<button className="clear-completed" onClick={completeClear}>
			Clear completed
		</button>
	</footer>
</section>

<footer className="info">
	<p>Click to edit a todo</p>
	<p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
	<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
</footer>
        
        
        </>
    )
}
export default MyToDoList;
