(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{3253:function(e,t,n){"use strict";n.r(t);var a=n(15),o=n(16),c=n(24),i=n(23),l=n(25),r=n(31),s=n(0),d=n.n(s),u=n(13),h=n(2414),m=n(122),b=n.n(m),p=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(c.a)(this,Object(i.a)(t).call(this))).hideModal=function(){var t=e.props.onClose;t&&t()},e.signWithQRCode=function(){e.setState({body:d.a.createElement("div",null,d.a.createElement(h.a,{onScan:e.onCodeScan}))})},e.onCodeScan=function(t){var n=t.code;e.setState({body:d.a.createElement("div",null,d.a.createElement("h1",null,n))})},e.state={body:null},e}return Object(l.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.transaction;this.setState({body:d.a.createElement("div",{className:"text-center"},d.a.createElement(b.a,{size:512,style:{width:"100%",height:"auto"},value:e}),d.a.createElement("br",null),d.a.createElement("button",{className:"btn btn-primary",onClick:this.signWithQRCode},"Sign with QR Code"))})}},{key:"render",value:function(){var e=this.state.body;this.props.transaction;return d.a.createElement(u.d,{isOpen:!0,toggle:this.hideModal,fade:!1,className:"modal-dialog-centered"},d.a.createElement(u.g,{className:"text-center",toggle:this.hideModal},"Sign Transaction"),d.a.createElement(u.e,null,e))}}]),t}(d.a.Component);t.default=Object(r.connect)(function(e){return{account:e.app.account}},{})(p)}}]);