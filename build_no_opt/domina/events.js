goog.provide('domina.events');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.events');
/**
* returns true if the node(child) is a child of parent
*/
domina.events.child_of_QMARK_ = (function child_of_QMARK_(parent,child){
while(true){
if(cljs.core.truth_(cljs.core.not.call(null,child)))
{return false;
} else
{if(cljs.core.truth_((parent === child)))
{return false;
} else
{if(cljs.core.truth_((child.parentNode === parent)))
{return true;
} else
{if(cljs.core.truth_("﷐'else"))
{{
var G__15412 = parent;
var G__15413 = child.parentNode;
parent = G__15412;
child = G__15413;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* this is used to build cross browser versions of :mouseenter and :mouseleave events
*/
domina.events.mouse_enter_leave = (function mouse_enter_leave(func){
return (function (e){
var re__15418 = e.relatedTarget;
var this$__15420 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15422 = cljs.core.not.call(null,(re__15418 === this$__15420));

if(cljs.core.truth_(and__3546__auto____15422))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15420,re__15418));
} else
{return and__3546__auto____15422;
}
})()))
{return func.call(null,e);
} else
{return null;
}
});
});
/**
* Generic event wrapper that handles listening and cleanup of wrapped events
*/
domina.events.gen_wrapper = (function gen_wrapper(event_key,wrapped_key,wrapper_func){
var obj__15424 = (new Object());
var wevent__15425 = cljs.core.name.call(null,wrapped_key);
var event__15426 = cljs.core.name.call(null,event_key);

obj__15424.wrapped_event = wevent__15425;
obj__15424.event = event__15426;
obj__15424.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15427 = wrapper_func.call(null,func);

callback__15427.listen = func;
callback__15427.scope = opt_scope;
callback__15427.event = event__15426;
callback__15427.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15425,callback__15427,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15425,callback__15427,capture);
}
});
obj__15424.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15430 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15425,false),goog.events.getListeners.call(null,elm,wevent__15425,true)):goog.events.getListeners.call(null,elm,wevent__15425,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15431 = obj.listener;
var lfunc__15432 = listener__15431.listen;
var scope__15433 = listener__15431.scope;
var capture__15434 = listener__15431.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15485 = (function (){var or__3548__auto____15484 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15484))
{return or__3548__auto____15484;
} else
{return cljs.core._EQ_.call(null,lfunc__15432,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15485))
{var or__3548__auto____15489 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15489))
{return or__3548__auto____15489;
} else
{return cljs.core._EQ_.call(null,scope__15433,opt_scope);
}
} else
{return and__3546__auto____15485;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15425,listener__15431,capture__15434);
} else
{return goog.events.unlisten.call(null,elm,wevent__15425,listener__15431,capture__15434);
}
} else
{return null;
}
}),listeners__15430));
});
return obj__15424;
});
domina.events.wrapper_register = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
domina.events.reg_event_wrapper_BANG_ = (function reg_event_wrapper_BANG_(event_key,wrapped_key,wrapper_func){
return cljs.core.swap_BANG_.call(null,domina.events.wrapper_register,cljs.core.assoc,event_key,domina.events.gen_wrapper.call(null,event_key,wrapped_key,wrapper_func));
});
/**
* adding an event to the selected nodes
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___15516 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15517 = (function (nds,event,func,capture){
var wrapper__15505 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15506__15508 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15506__15508))
{var node__15511 = cljs.core.first.call(null,G__15506__15508);
var G__15506__15513 = G__15506__15508;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15505)))
{goog.events.listen.call(null,node__15511,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15511,wrapper__15505,func,capture);
}
var temp__3698__auto____15514 = cljs.core.next.call(null,G__15506__15513);

if(cljs.core.truth_(temp__3698__auto____15514))
{var G__15506__15515 = temp__3698__auto____15514;

{
var G__15536 = cljs.core.first.call(null,G__15506__15515);
var G__15537 = G__15506__15515;
node__15511 = G__15536;
G__15506__15513 = G__15537;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
listen_BANG_ = function(nds,event,func,capture){
switch(arguments.length){
case  3 :
return listen_BANG___15516.call(this,nds,event,func);
case  4 :
return listen_BANG___15517.call(this,nds,event,func,capture);
}
throw('Invalid arity: ' + arguments.length);
};
return listen_BANG_;
})()
;
/**
* removing a specific event from the selected nodes
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___15591 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15592 = (function (nds,event,func,capture){
var wrapper__15547 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15549__15550 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15549__15550))
{var node__15551 = cljs.core.first.call(null,G__15549__15550);
var G__15549__15552 = G__15549__15550;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15547)))
{goog.events.unlisten.call(null,node__15551,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15547.unlisten(node__15551,func,capture);
}
var temp__3698__auto____15553 = cljs.core.next.call(null,G__15549__15552);

if(cljs.core.truth_(temp__3698__auto____15553))
{var G__15549__15554 = temp__3698__auto____15553;

{
var G__15597 = cljs.core.first.call(null,G__15549__15554);
var G__15598 = G__15549__15554;
node__15551 = G__15597;
G__15549__15552 = G__15598;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
unlisten_BANG_ = function(nds,event,func,capture){
switch(arguments.length){
case  3 :
return unlisten_BANG___15591.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15592.call(this,nds,event,func,capture);
}
throw('Invalid arity: ' + arguments.length);
};
return unlisten_BANG_;
})()
;
/**
* removes all listeners for a given set of events on the selected nodes
* @param {...*} var_args
*/
domina.events.remove_listeners_BANG_ = (function() { 
var remove_listeners_BANG___delegate = function (nds,event_list){
var G__15602__15604 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15602__15604))
{var node__15609 = cljs.core.first.call(null,G__15602__15604);
var G__15602__15610 = G__15602__15604;

while(true){
var map_func__15666 = ((function (node__15609,G__15602__15610){
return (function (p1__15540_SHARP_){
var wrapper__15612 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15540_SHARP_);

if(cljs.core.truth_(wrapper__15612))
{return wrapper__15612.unlisten(node__15609);
} else
{return goog.events.removeAll.call(null,node__15609,cljs.core.name.call(null,p1__15540_SHARP_));
}
});})(node__15609,G__15602__15610))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15666,event_list));
var temp__3698__auto____15667 = cljs.core.next.call(null,G__15602__15610);

if(cljs.core.truth_(temp__3698__auto____15667))
{var G__15602__15668 = temp__3698__auto____15667;

{
var G__15670 = cljs.core.first.call(null,G__15602__15668);
var G__15671 = G__15602__15668;
node__15609 = G__15670;
G__15602__15610 = G__15671;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
};
var remove_listeners_BANG_ = function (nds,var_args){
var event_list = null;
if (goog.isDef(var_args)) {
  event_list = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return remove_listeners_BANG___delegate.call(this, nds, event_list);
};
remove_listeners_BANG_.cljs$lang$maxFixedArity = 1;
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15672){
var nds = cljs.core.first(arglist__15672);
var event_list = cljs.core.rest(arglist__15672);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15673 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15674 = (cljs.core.truth_(wrapper__15673)?wrapper__15673.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15676 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15676.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15677__15679 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15677__15679))
{var node__15680 = cljs.core.first.call(null,G__15677__15679);
var G__15677__15682 = G__15677__15679;

while(true){
goog.events.fireListeners.call(null,node__15680,nevent__15674,capture,event_obj__15676);
var temp__3698__auto____15684 = cljs.core.next.call(null,G__15677__15682);

if(cljs.core.truth_(temp__3698__auto____15684))
{var G__15677__15685 = temp__3698__auto____15684;

{
var G__15686 = cljs.core.first.call(null,G__15677__15685);
var G__15687 = G__15677__15685;
node__15680 = G__15686;
G__15677__15682 = G__15687;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
domina.events.reg_event_wrapper_BANG_.call(null,"﷐'mouseenter","﷐'mouseover",domina.events.mouse_enter_leave);
domina.events.reg_event_wrapper_BANG_.call(null,"﷐'mouseleave","﷐'mouseout",domina.events.mouse_enter_leave);
