define(["core/Logger","core/vendor/DropletJS.Class.min"],function(r,t){return t.create({DEFAULT_NS:"__default",msgArray:null,msgString:null,namespace:null,construct:function(r){if(this.namespace=this.DEFAULT_NS,r.indexOf(":")>-1&&(this.namespace=r.substr(0,r.indexOf(":")),r=r.substr(r.indexOf(":")+1,r.length)),r.indexOf(".")>-1){var t=r.split(".");this.msgArray=[t[0]||"*",t[1]||"*",t[2]||"*",t[3]||"*"],this.msgString=this.msgArray.join(".")}else this.msgArray=[r],this.msgString=r},matches:function(r){if(this.msgString===r)return!0;var t=this.msgArray,n=r.split(".");if(t.length!==n.length)return!1;for(var s="",i="",e=t.length>=n.length?t.length:n.length,g=0;g<e;g++){if("*"!==t[g]&&"*"!==n[g]&&t[g]!==n[g])return!1;s+="*"===t[g]?"0":"1",i+="*"===n[g]?"0":"1"}return s>=i},toString:function(){return this.msgString},getOriginator:function(){return"*"===this.msgArray[0]?null:this.msgArray[0]},getDescriptor:function(){return"*"===this.msgArray[3]?null:this.msgArray[3]}})});