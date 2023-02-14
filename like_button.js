var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// // // // // // // // // class Toggle extends React.Component{
// // // // // // // // //   constructor(props){
// // // // // // // // //     super(props);
// // // // // // // // //     this.state = {IsToggleOn: true};
// // // // // // // // //     this.handleClick = this.handleClick.bind(this);
// // // // // // // // //   }

// // // // // // // // //   handleClick() {
// // // // // // // // //     this.setState(prev =>({
// // // // // // // // //       IsToggleOn: !prev.IsToggleOn
// // // // // // // // //     }));
// // // // // // // // //   }

// // // // // // // // //   render(){
// // // // // // // // //     return(
// // // // // // // // //       <button onClick={(e) => this.handleClick(id,e)}>
// // // // // // // // //       {this.state.IsToggleOn ? 'Включено' : 'Выключено'}
// // // // // // // // //       </button>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // // }

// // // // // // // // // const root = ReactDOM.createRoot(document.getElementById('root'));
// // // // // // // // // root.render(<Toggle />);


// // // // // // // // class LoginControl extends React.Component{
// // // // // // // //   constructor(props) {
// // // // // // // //     super(props);
// // // // // // // //     // соединение с обработчиками событий
// // // // // // // //     this.handleLoginClick = this.handleLoginClick.bind(this);
// // // // // // // //     this.handleLoginOutClick = this.handleLoginOutClick.bind(this);
// // // // // // // //     this.state = {isLogged:false};
// // // // // // // //   }

// // // // // // // //   handleLoginClick(){
// // // // // // // //     this.setState({isLogged:true})
// // // // // // // //   }

// // // // // // // //   handleLoginOutClick(){
// // // // // // // //     this.setState({isLogged:false})
// // // // // // // //   }

// // // // // // // //   render(){
// // // // // // // //     const isLogged = this.state.isLogged;
// // // // // // // //     let button;
// // // // // // // //     if (isLogged) {
// // // // // // // //       button = <LoginOutButton onClick={this.handleLoginOutClick} />;
// // // // // // // //     } else{
// // // // // // // //       button = <LoginButton onClick={this.handleLoginClick}/>;
// // // // // // // //     } 

// // // // // // // //     return(
// // // // // // // //       <div>
// // // // // // // //         <Greeting isLogged={isLogged} />
// // // // // // // //         {button}
// // // // // // // //       </div>
// // // // // // // //     )
// // // // // // // //   }
// // // // // // // // }

// // // // // // // // function UserGreeting(props) {
// // // // // // // //   return <h1>С возвращением!</h1>;
// // // // // // // // }

// // // // // // // // function GuestGreeting(props) {
// // // // // // // //   return <h1>Войдите, пожалуйста.</h1>;
// // // // // // // // }


// // // // // // // // function LoginButton(props){
// // // // // // // //   return(
// // // // // // // //     <button onClick={props.onClick}>In</button>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // // function LoginOutButton(props){
// // // // // // // //   return(
// // // // // // // //     <button onClick={props.onClick}>Out it</button>
// // // // // // // //   );
// // // // // // // // }


// // // // // // // // function Greeting(props){
// // // // // // // //   const isLogged = props.isLogged;
// // // // // // // //   if (isLogged){
// // // // // // // //     return <UserGreeting/>;
// // // // // // // //   }
// // // // // // // //   else {
// // // // // // // //     return <GuestGreeting/>;
// // // // // // // //   }
// // // // // // // // }


// // // // // // // function Mailbox(props){
// // // // // // //   const unreadMessages = props.unreadMessages;
// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       <h1>Hello!</h1>
// // // // // // //       {unreadMessages.length &&
// // // // // // //       <h2>
// // // // // // //         у {unreadMessages.length} вас непрочитанных сообщений
// // // // // // //       </h2>
// // // // // // //       }
// // // // // // //     </div>
// // // // // // //   )
// // // // // // // }

// // // // // // // const messages = ['React','Re: React','Re:Re:React'];
// // // // // // // const root = ReactDOM.createRoot(document.getElementById('root'));
// // // // // // // root.render(<Mailbox unreadMessages={messages} />);


// // // // // function WarningBan(props){
// // // // //   if (!props.warn){
// // // // //     return null;
// // // // //   }

// // // // //   return(
// // // // //     <div className="warning">DANGER!!!</div>
// // // // //   );
// // // // // }


// // // // // class Page extends React.Component{
// // // // //   constructor(props){
// // // // //     super(props);
// // // // //     this.state = {showWarning: true};
// // // // //     this.color = ['red','blue','orange','purple'];
// // // // //     this.handleToggleClick = this.handleToggleClick.bind(this);

// // // // //   }

// // // // //   handleToggleClick(){
// // // // //     this.setState(state =>({
// // // // //       showWarning: !state.showWarning,
// // // // //       color: this.color.shift()
// // // // //     }
// // // // //     ));
// // // // //   }

// // // // //   render(){
// // // // //     return(
// // // // //       <div>
// // // // //         <WarningBan warn={this.state.showWarning}/>
// // // // //         <button style={{color: this.color[0]}} onClick={this.handleToggleClick}>
// // // // //         {this.state.showWarning ? 'disabled' : 'display'}
// // // // //         </button>
// // // // //         {this.color.length()}
// // // // //       </div>
// // // // //     );
// // // // //   }
// // // // // }

// // // // // const root = ReactDOM.createRoot(document.getElementById('root'));
// // // // // root.render(<Page />);


// // // // // // function NumberList(props) {
// // // // // //   const numbers = props.numbers;
// // // // // //   const listItems = numbers.map((number) =>
// // // // // //     // <li>{number}*2=</li>
// // // // // //     <li key={number.toString()}>{number}*2={number*2}<br></br></li>
// // // // // //     );
// // // // // //   return (
// // // // // //     <ul>{listItems}</ul>
// // // // // //   );
// // // // // // }

// // // // // // const numbers = [1, 2, 3, 4, 5];

// // // function List(props){
// // //   // let value = props.value;
// // //   return (
// // //   <ul>
// // //   <li>
// // //   {props.value}
// // //   </li>

// // // <ul>
// // //   <li>ID = {props.id} {this.numbers.pop()}</li>
// // // </ul>
// // //   </ul>
// // //   )

// // // }

// // // function NumberX2(props){
// // //   const numbers = props.numbers;
// // //   return(
// // //     <ul>

// // //       {numbers.map((number) =>
// // //       <List key={number.toString()} value={number}/>
// // //       )}
// // //     </ul>
// // //   )
// // // }


// // // let numbers = [2,5,3,6,7,4,9];

// // // const root = ReactDOM.createRoot(document.getElementById('root'));
// // // root.render(<NumberX2 numbers={numbers} />);


// // // // class NameForm extends React.Component {
// // // //   constructor(props) {
// // // //     super(props);
// // // //     this.state = {value: ''};
// // // //     this.handleChange = this.handleChange.bind(this);
// // // //     this.handleSubmit = this.handleSubmit.bind(this);
// // // //   }

// // // //   handleChange(event) {
// // // //         this.setState({value: event.target.value});
// // // //   }

// // // //   handleSubmit(event) {
// // // //     alert('Отправленное имя: ' + this.state.value.slice(0,1).toLocaleUpperCase() + this.state.value.slice().toLowerCase());
// // // //     event.preventDefault();
// // // //   }

// // // //   render() {
// // // //     return (
// // // //       <form onSubmit={this.handleSubmit}>
// // // //           Имя:
// // // //           <input type="text" value={this.state.value} onChange={this.handleChange} />
// // // //         <input type="submit" value="Отправить" />
// // // //       </form>
// // // //     );
// // // //   }
// // // // }


// // // // const root = ReactDOM.createRoot(document.getElementById('root'));
// // // // root.render(<NameForm />);


// // const scaleNames = {
// //   'c': 'Celcius',
// //   'f':'Fahrenheit'
// // };

// // function toCelsius(fahrenheit) {
// //   return (fahrenheit - 32) * 5 / 9;
// // }

// // function toFahrenheit(celsius) {
// //   return (celsius * 9 / 5) + 32;
// // }

// // function tryConvert(temperature,convert){
// //   const input = parseFloat(temperature);
// //   if (Number.isNaN(input)){
// //     return '';
// //   }
// //   const output = convert(input);
// //   const rounded = Math.round(output*1000)/1000;
// //   return rounded.toString();
// // }

// // function BoilingVerdict(props) {
// //   if (props.celsius >= 100) {
// //     return <p>Вода закипит.</p>;
// //   }
// //   return <p>Вода не закипит.</p>;
// // }

// // class TemperatureInput extends React.Component{
// //   constructor(props){
// //     super(props);
// //     this.handleChange = this.handleChange.bind(this);
// //   }

// //   handleChange(e){
// //     // this.setState({temperature: e.target.value});
// //     this.props.onTemperatureChange(e.target.value);
// //   }

// //   render(){
// //     const temperature = this.props.temperature;
// //     const scale = this.props.scale;
// //     return(
// //       <fieldset>
// //         <legend>Enter temperature in {scaleNames[scale]}</legend>
// //         <input value={temperature} onChange={this.handleChange}></input>
// //       </fieldset>
// //     )
// //   }
// // }

// // class Calculator extends React.Component{
// //   constructor(props){
// //     super(props);
// //     this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
// //     this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
// //     this.state = {temperature:'',scale:'c'};
// //   }

// //   handleCelsiusChange(temperature){
// //     this.setState({scale:'c',temperature});
// //   }

// //   handleFahrenheitChange(temperature){
// //     this.setState({scale:'f',temperature});
// //   }

// //   render(){
// //     const scale = this.state.scale;
// //     const temperature = this.state.temperature;
// //     const celsius = scale === 'f' ? tryConvert(temperature,toCelsius) : temperature;
// //     const fahrenheit = scale === 'c' ? tryConvert(temperature,toFahrenheit) : temperature;
// //     return(
// //       <div>
// //         <TemperatureInput 
// //           scale='c'
// //           temperature={celsius}
// //           onTemperatureChange={this.handleCelsiusChange}
// //         />
// //         <TemperatureInput 
// //           scale='f'
// //           temperature={fahrenheit}
// //           onTemperatureChange={this.handleFahrenheitChange}
// //         />
// //         <BoilingVerdict
// //           celsius={parseFloat(celsius)}
// //         />
// //       </div>
// //     )
// //   }
// // }

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<Calculator />);


function cityJson() {
  return React.createElement(
    "h1",
    null,
    "hello"
  );
}

var SignUpDialog = function (_React$Component) {
  _inherits(SignUpDialog, _React$Component);

  function SignUpDialog(props) {
    _classCallCheck(this, SignUpDialog);

    var _this = _possibleConstructorReturn(this, (SignUpDialog.__proto__ || Object.getPrototypeOf(SignUpDialog)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSignUp = _this.handleSignUp.bind(_this);
    _this.jsonCity = _this.jsonCity.bind(_this);
    _this.state = { city: 'Нижневартовск' };
    return _this;
  }

  _createClass(SignUpDialog, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "itd_profile" },
        React.createElement(
          "a",
          { href: "#", onClick: React.createElement("cityJson", null) },
          React.createElement(
            "span",
            { id: "cityReact" },
            " ",
            this.state.city
          ),
          React.createElement(
            "span",
            { id: "arrow" },
            "\u2192"
          )
        )
      );
    }
  }, {
    key: "jsonCity",
    value: function jsonCity() {}
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({ city: e.target.value });
    }
  }, {
    key: "handleSignUp",
    value: function handleSignUp() {
      alert("Welcome aboard, " + this.state.city + "!");
    }
  }]);

  return SignUpDialog;
}(React.Component);

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(SignUpDialog, null));

// class City extends React.Component{
//   constructor(props){
//     super(props);
//     this.state ={city:'Нижневартовск'}
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//       }

//     handleChange(event) {
//             this.setState({value: event.target.value});
//       }

//       handleSubmit() {
//         alert('Город: ' + this.state.city);
//         // event.preventDefault();
//       }
// }

// function CityClick(){
//   return(
//     <button onClick={<City handleSubmit/>} className="but">
//      Hello
//      </button>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<CityClick/>)