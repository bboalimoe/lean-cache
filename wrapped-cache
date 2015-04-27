/**
 * Created by zhanghengyang on 15/4/27.
 */

var cache = require("memory-cache");


exports.get_cache_ids = function(){

    console.log("cache is " + memory_cache.keys());
    console.log("cache type is " +  typeof cache);

    var id_set = new Set();
    var obj = cache;
    var cache_ids = Object.keys(obj);
    if (cache_ids.length <= 0) {return null;}
    cache_ids.forEach(
        function(id){
            id_set.add(id);
        }
    )
    return cache_ids;
};

exports.set_value = function(key,value){
    console.log("key is fiuck" +  key);
    console.log("value is " + value);
    var r = cache.get("location");
     r = {"a":1};
    return true;


};

var get = function(key) {

    if(typeof cache[key] == "undefined") {
        return false;
    }
    else{
        return cache[key];
    }
}

exports.del = function(key) {

    if (!get(key)) {
        delete cache[key];
        return true;
    }
    return false;

}

exports.update = function(key,value){

    if (!get(key)) {
        cache[key] = value;
        return true;
    }
    return false;

}

exports.get = get ;
