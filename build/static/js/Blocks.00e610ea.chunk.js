(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1102:function(e,t,a){"use strict";a.d(t,"a",function(){return p});var n=a(14),r=a(15),o=a(24),i=a(23),l=a(25),s=a(0),c=a.n(s),u=a(151),d=a(12),f=a(3),p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={open:!1,id:Object(u.a)(24)},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.open,n=t.id,r=this.props,o=r.text,i=r.placement,l=r.testSecond,s=void 0===l?"":l,u=r.className,p=void 0===u?"":u,m=r.info,h=void 0===m?"":m;return c.a.createElement("div",{className:"d-inline-block"},c.a.createElement("div",{className:"question-mark",id:n,onMouseOver:function(){return e.setState({open:!0})},onMouseOut:function(){return e.setState({open:!1})}},c.a.createElement("i",null,"?")),c.a.createElement(d.h,{placement:i,isOpen:a,target:n,className:p,innerClassName:"w-100"},o?Object(f.b)(o):"",s?c.a.createElement("span",null,c.a.createElement("br",null)," ",Object(f.b)(s)):"",h||""))}}]),t}(c.a.Component)},1104:function(e,t,a){"use strict";a.d(t,"a",function(){return _});var n=a(1130),r=a.n(n),o=a(125),i=a.n(o),l=a(1105),s=a.n(l),c=a(1113),u=a.n(c),d=a(2),f=a.n(d),p=a(7),m=a(5),h=a(14),b=a(15),v=a(24),g=a(23),O=a(25),y=a(0),w=a.n(y),j=a(3),E=a(17),_=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(v.a)(this,Object(g.a)(t).call(this,e))).loadDatas=Object(m.a)(f.a.mark(function e(){var t,n,r,o,i=arguments;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:1,n=i.length>1&&void 0!==i[1]?i[1]:40,r=a.state.filter,e.next=5,E.a.getTokens(Object(p.a)({sort:"rank",limit:n,start:(t-1)*n},r));case 5:return o=e.sent,e.abrupt("return",o);case 7:case"end":return e.stop()}},e)})),a.handleTableChange=function(e,t,n){var r=Object(p.a)({},a.state.pagination);r.current=e.current,a.setState({pagination:r}),a.fetch(Object(p.a)({pageSize:e.pageSize,page:e.current,sortField:n.field,sortOrder:n.order},t))},a.fetch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.setState({loading:!0}),a.props.onPageChange?(a.props.onPageChange(e.page,e.pageSize),a.setState({loading:!1})):a.setState({loading:!1})},a.onInputChange=function(e){a.setState({searchText:e.target.value})},a.onReset=function(){a.setState({searchText:""},function(){a.onSearch()})},a.onSearch=function(){var e=a.props.tableData,t=a.state.searchText,n=new RegExp(t,"gi");a.setState({filterDropdownVisible:!1,filtered:!!t,data:e.map(function(e){return e.name.match(n)?Object(p.a)({},e,{name:w.a.createElement("span",null,e.name.split(new RegExp("(?<=".concat(t,")|(?=").concat(t,")"),"i")).map(function(e,a){return e.toLowerCase()===t.toLowerCase()?w.a.createElement("span",{key:a,className:"highlight"},e):e}))}):null}).filter(function(e){return!!e})})},a.setColumn=function(e){function t(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}var n={filterDropdown:w.a.createElement("div",{className:"custom-filter-dropdown"},w.a.createElement(u.a,{ref:function(e){return a.searchInput=e},placeholder:"Search name",value:a.state.searchText,onChange:a.onInputChange,onPressEnter:a.onSearch}),w.a.createElement(s.a,{type:"primary",onClick:a.onSearch},Object(j.c)("search")),w.a.createElement(s.a,{className:"btn-secondary ml-1",onClick:a.onReset},Object(j.c)("reset"))),filterIcon:w.a.createElement(i.a,{type:"filter",style:{color:a.state.filtered?"#108ee9":"#aaa"}}),filterDropdownVisible:a.state.filterDropdownVisible,onFilterDropdownVisibleChange:function(e){a.setState({filterDropdownVisible:e},function(){a.searchInput&&a.searchInput.focus()})}},r=[],o=!0,l=!1,c=void 0;try{for(var d,f=e[Symbol.iterator]();!(o=(d=f.next()).done);o=!0){var m=d.value;if(m.sorter&&!m.filterDropdown){var h={sorter:t(m.key)};r.push(Object(p.a)({},m,h))}else if(!m.sorter&&m.filterDropdown){var b=Object(p.a)({},n);r.push(Object(p.a)({},m,b))}else if(m.sorter&&m.filterDropdown){var v=Object(p.a)({sorter:t(m.key)},n);r.push(Object(p.a)({},m,v))}else r.push(m)}}catch(g){l=!0,c=g}finally{try{o||null==f.return||f.return()}finally{if(l)throw c}}return r},a.state={filterDropdownVisible:!1,data:[],searchText:"",filtered:!1,pagination:{showQuickJumper:!0,position:"both",showSizeChanger:!0,defaultPageSize:20},loading:!1},a}return Object(O.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.total,a=e.loading,n=e.data,o=e.column,i=e.bordered,l=e.pagination,s=void 0===l||l,c=e.scroll,u=e.locale,d=e.addr,f=e.transfers,m=(e.contractAddress,this.setColumn(o)),h=s?Object(p.a)({total:t},this.state.pagination):s;return w.a.createElement("div",null,d?w.a.createElement("div",{className:"card table_pos table_pos_addr "+(0==n.length?"table_pos_addr_data":"")+("address"==f?" transfer-mt-100":" transfer-pt-100")},w.a.createElement(r.a,{bordered:i,columns:m,rowKey:function(e,t){return t},dataSource:n,locale:u,scroll:c,pagination:h,loading:a,onChange:this.handleTableChange})," "):w.a.createElement("div",{className:"card table_pos"},w.a.createElement(r.a,{bordered:i,columns:m,rowKey:function(e,t){return t},dataSource:n,locale:u,scroll:c,pagination:h,loading:a,onChange:this.handleTableChange})))}}]),t}(y.Component)},1123:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],n=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(s){r=!0,o=s}finally{try{!n&&l.return&&l.return()}finally{if(r)throw o}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(0)),l=c(a(1152)),s=c(a(1153));function c(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var d=i.Component,f=60,p=60*f,m=24*p,h=7*m,b=30*m,v=365*m,g=function(e){function t(){var e,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return a=n=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.isStillMounted=!1,n.tick=function(e){if(n.isStillMounted&&n.props.live){var t=(0,s.default)(n.props.date).valueOf();if(t){var a=n.props.now(),r=Math.round(Math.abs(a-t)/1e3),o=r<f?1e3:r<p?1e3*f:r<m?1e3*p:0,i=Math.min(Math.max(o,1e3*n.props.minPeriod),1e3*n.props.maxPeriod);i&&(n.timeoutId&&clearTimeout(n.timeoutId),n.timeoutId=setTimeout(n.tick,i)),e||n.forceUpdate()}else console.warn("[react-timeago] Invalid Date provided")}},u(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,d),o(t,[{key:"componentDidMount",value:function(){this.isStillMounted=!0,this.props.live&&this.tick(!0)}},{key:"componentDidUpdate",value:function(e){this.props.live===e.live&&this.props.date===e.date||(!this.props.live&&this.timeoutId&&clearTimeout(this.timeoutId),this.tick())}},{key:"componentWillUnmount",value:function(){this.isStillMounted=!1,this.timeoutId&&(clearTimeout(this.timeoutId),this.timeoutId=void 0)}},{key:"render",value:function(){var e=this.props,t=e.date,a=e.formatter,o=e.component,c=(e.live,e.minPeriod,e.maxPeriod,e.title),u=e.now,d=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["date","formatter","component","live","minPeriod","maxPeriod","title","now"]),g=(0,s.default)(t).valueOf();if(!g)return null;var O=u(),y=Math.round(Math.abs(O-g)/1e3),w=g<O?"ago":"from now",j=y<f?[Math.round(y),"second"]:y<p?[Math.round(y/f),"minute"]:y<m?[Math.round(y/p),"hour"]:y<h?[Math.round(y/m),"day"]:y<b?[Math.round(y/h),"week"]:y<v?[Math.round(y/b),"month"]:[Math.round(y/v),"year"],E=r(j,2),_=E[0],k=E[1],M="undefined"===typeof c?"string"===typeof t?t:(0,s.default)(t).toISOString().substr(0,16).replace("T"," "):c,S="time"===o?Object.assign({},d,{dateTime:(0,s.default)(t).toISOString()}):d,C=l.default.bind(null,_,k,w);return i.createElement(o,n({},S,{title:M}),a(_,k,w,g,C,u))}}]),t}();g.displayName="TimeAgo",g.defaultProps={live:!0,component:"time",minPeriod:0,maxPeriod:1/0,formatter:l.default,now:function(){return Date.now()}},t.default=g},1138:function(e,t,a){"use strict";var n=a(14),r=a(15),o=a(24),i=a(23),l=a(25),s=a(0),c=a.n(s),u=a(10),d=a(3),f=a(1102),p=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.total,a=e.rangeTotal,n=e.typeText,r=e.common,o=void 0!==r&&r,i=e.intl,l=e.markName,u=void 0===l?"table-question-mark":l,p=e.top,m=void 0===p?"26px":p,h=e.isQuestionMark,b=void 0===h||h,v=e.selected,g=i.formatMessage({id:"view_total"})+" "+a+" "+i.formatMessage({id:n}),O=i.formatMessage({id:"view_total"})+" "+a+" "+i.formatMessage({id:n})+"<br/>("+i.formatMessage({id:"table_info_big"})+")",y=a>1e4?O:g,w=i.formatMessage({id:"table_info_new_tip"});return c.a.createElement(s.Fragment,null,v?c.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto",top:m}},0!==t?c.a.createElement("div",null,Object(d.c)("a_totle")," ",t," ",Object(d.c)(n),b?c.a.createElement("span",{className:"ml-1"},c.a.createElement(f.a,{placement:"top",info:i.formatMessage({id:"select_tip"})})):"",c.a.createElement("br",null),c.a.createElement("span",null,Object(d.d)("date_number_tip",{total:a}),a>2e3?c.a.createElement("span",null,", ",Object(d.c)("date_list_tip")):"")):c.a.createElement("span",null,Object(d.c)("a_totle")," ",t," ",Object(d.c)(n))):o?c.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto",top:m}},y,c.a.createElement("span",null,c.a.createElement(f.a,{placement:"top",text:"to_provide_a_better_experience"}))):c.a.createElement("div",{className:"table_pos_info d-none d-md-block",style:{left:"auto",top:m}},a>1e4?c.a.createElement("div",null,Object(d.c)("view_total")," ",a," ",Object(d.c)(n),b?c.a.createElement(f.a,{placement:"top",info:w}):"",c.a.createElement("br",null)," ",c.a.createElement("span",null,"(",Object(d.c)("table_info_big1")),c.a.createElement("span",null,t),c.a.createElement("span",null,Object(d.c)("table_info_big2"),")")):c.a.createElement("span",null,Object(d.c)("view_total")," ",a," ",Object(d.c)(n)),c.a.createElement("span",{className:a>1e4?u:"table-question-mark-small"})))}}]),t}(c.a.Component);t.a=Object(u.h)(p)},1152:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){1!==e&&(t+="s");return e+" "+t+" "+a};!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);t.default=e}(a(0))},1153:function(e,t,a){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=new Date(e);if(!Number.isNaN(t.valueOf()))return t;var a=String(e).match(/\d+/g);if(null==a||a.length<=2)return t;var r=a.map(function(e){return parseInt(e)}),o=(d=r,Array.isArray(d)?d:Array.from(d)),i=o[0],l=o[1],s=o.slice(2),c=[i,l-1].concat(n(s)),u=new Date(Date.UTC.apply(Date,n(c)));return u;var d}},1278:function(e,t,a){"use strict";var n=a(1134),r=a.n(n),o=a(83),i=a(14),l=a(15),s=a(24),c=a(23),u=a(25),d=a(0),f=a.n(d),p=a(10),m=a(276),h=a.n(m),b=a(63),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(c.a)(t).call(this,e))).disabledStartDate=function(e){var t=a.state.endValue;return e&&t?e.valueOf()>t.valueOf()||e.valueOf()<h()([2018,5,25]).valueOf():e.valueOf()>h()().valueOf()||e.valueOf()<h()([2018,5,25]).valueOf()},a.disabledEndDate=function(e){var t=a.state.startValue;return e&&t&&e.valueOf()<=t.valueOf()||e.valueOf()>h()().valueOf()},a.onChange=function(e,t){a.setState(Object(o.a)({},e,t))},a.onStartChange=function(e){a.onChange("startValue",e)},a.onEndChange=function(e){a.onChange("endValue",e)},a.handleStartOpenChange=function(e){e||a.setState({endOpen:!0})},a.handleEndOpenChange=function(e){a.setState({endOpen:e})},a.handleOk=function(e,t){var n=a.props,r=n.onDateOk,o=n.intl;e?t?r(e,t):b.toastr.warning(o.formatMessage({id:"warning"}),o.formatMessage({id:"select_end_time"})):b.toastr.warning(o.formatMessage({id:"warning"}),o.formatMessage({id:"select_start_time"}))},a.state={startValue:h()([2018,5,25]).startOf("day"),endValue:h()(),endOpen:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.startValue,n=t.endValue,o=t.endOpen,i=this.props.dateClass,l=void 0===i?"date-range-box":i;return f.a.createElement("div",{className:l},f.a.createElement(r.a,{disabledDate:this.disabledStartDate,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",value:a,placeholder:"Start",onChange:this.onStartChange,onOpenChange:this.handleStartOpenChange}),"\xa0\xa0~\xa0\xa0",f.a.createElement(r.a,{disabledDate:this.disabledEndDate,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",value:n,placeholder:"End",onChange:this.onEndChange,open:o,onOpenChange:this.handleEndOpenChange,onOk:function(){return e.handleOk(a,n)}}))}}]),t}(f.a.Component);t.a=Object(p.h)(v)},3242:function(e,t,a){"use strict";a.r(t);var n=a(199),r=a.n(n),o=a(2),i=a.n(o),l=a(5),s=a(14),c=a(15),u=a(24),d=a(23),f=a(25),p=a(1134),m=a.n(p),h=a(0),b=a.n(h),v=a(284),g=a(30),O=a(1123),y=a.n(O),w=a(276),j=a.n(w),E=a(10),_=a(17),k=a(18),M=a(1104),S=a(81),C=a(1138),D=(a(1278),a(22),m.a.RangePicker,function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).onChange=function(t,a){e.loadBlocks(t,a)},e.loadBlocks=Object(l.a)(i.a.mark(function t(){var a,n,r,o,l,s,c,u,d=arguments;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=d.length>0&&void 0!==d[0]?d[0]:1,n=d.length>1&&void 0!==d[1]?d[1]:20,r=e.props,r.location,o=r.match,o.params.date,parseInt(o.params.date)-864e5,e.setState({loading:!0,page:a,pageSize:n}),t.next=8,_.a.getBlocks({limit:n,start:(a-1)*n,sort:"-number",start_timestamp:e.start,end_timestamp:e.end});case 8:l=t.sent,s=l.blocks,c=l.total,u=l.rangeTotal,e.setState({loading:!1,blocks:s,total:c,rangeTotal:u});case 13:case"end":return t.stop()}},t)})),e.setProducedName=function(e){return e.witnessName?b.a.createElement("span",null,e.witnessName):e.number?b.a.createElement("span",null,e.witnessAddress):b.a.createElement("span",null)},e.customizedColumn=function(){var t=e.props.intl;return[{title:r()(t.formatMessage({id:"height"})),dataIndex:"number",key:"number",align:"center",className:"ant_table",width:"12%",render:function(e,t,a){return b.a.createElement(k.b,{number:e})}},{title:r()(t.formatMessage({id:"age"})),dataIndex:"timestamp",key:"timestamp",align:"left",className:"ant_table",render:function(e,t,a){return b.a.createElement(y.a,{date:e,title:j()(e).format("MMM-DD-YYYY HH:mm:ss A")})}},{title:r()(t.formatMessage({id:"transactions"})),dataIndex:"nrOfTrx",key:"nrOfTrx",align:"center",render:function(e,t,a){return b.a.createElement(E.c,{value:e})}},{title:r()(t.formatMessage({id:"produced_by"})),dataIndex:"witnessName",key:"witnessName",align:"left",width:"40%",className:"ant_table",render:function(t,a,n){return b.a.createElement(k.a,{address:a.witnessAddress},e.setProducedName(a))}},{title:r()(t.formatMessage({id:"bytes"})),dataIndex:"size",key:"size",align:"center",className:"ant_table",render:function(e,t,a){return b.a.createElement(E.c,{value:e})}}]},e.start="",e.end="",e.state={loading:!1,blocks:[],total:0},e}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.loadBlocks()}},{key:"componentDidUpdate",value:function(){}},{key:"onDateOk",value:function(e,t){this.start=e.valueOf(),this.end=t.valueOf();var a=this.state,n=a.page,r=a.pageSize;this.loadBlocks(n,r)}},{key:"render",value:function(){var e=this,t=this.state,a=t.blocks,n=t.total,r=t.rangeTotal,o=t.loading,i=(t.page,t.pageSize,this.props),l=(i.match,i.intl,this.customizedColumn());return b.a.createElement("main",{className:"container header-overlap pb-3 token_black"},o&&b.a.createElement("div",{className:"loading-style"},b.a.createElement(S.b,null)),b.a.createElement("div",{className:"row"},b.a.createElement("div",{className:"col-md-12 table_pos"},n?b.a.createElement(C.a,{total:n,rangeTotal:r,typeText:"block_unit"}):"",b.a.createElement(M.a,{bordered:!0,loading:o,column:l,data:a,total:n,onPageChange:function(t,a){e.loadBlocks(t,a)}}))))}}]),t}(b.a.Component));var N={loadTokens:v.b};t.default=Object(g.connect)(function(e){return{}},N)(Object(E.h)(D))}}]);