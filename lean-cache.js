/**
 * Created by zhanghengyang on 15/4/23.
 */

//use the leancloud for cache.

var Cache = AV.Object.extend("CacheLocation");
var m_collections = AV.Collection.extend({
        model: Cache
    }
);
var id_set = new Set();
var m_temp = {};

exports.get_cache_ids = function(ids) {

    var query = new AV.Query(Cache);

    return query.find({
        success:function(results){
            console.log('"cache fetch succeed');
            if(results.length <= 0) {console.log("empty cache");return null;}
            results.forEach(function(obj){
                id_set.add(obj.get("obj_id"));
            });
            ids = id_set;
        },
        error:function(error){
            console.log("error is " + error);
        }
    });



}


exports.set = function(key, value){

    var m_cache = new Cache();
    m_cache.set("obj_id",key);
    m_cache.set("values",value)
    return m_cache.save(null,{
        success:function(m_cache){
            console.log("succes cache one,id is  ==>" + m_cache.id);
        },
        error:function(m_cache,error){
            console.log("fail cache one,id is  ==>" + m_cache.id + "  //// error is " + error);

        }
    })
}

exports.get = function(key,callback){

    var query = new AV.Query(Cache);
    query.equalTo("obj_id",key);
    return query.find({
        success:function(caches){
            // check caches length
            m_temp = caches[0].get("values");
            var p = callback(m_temp);
            //if p is not null
            AV.Promise.when(p).then(
                function(){

            },
                function(){

                });
            //else p null

        },
        error:function(obj,error){
            console.log("error is " + error);
        }
    })
};

exports.del = function(key) {

    var query = new AV.Query(Cache);
    query.equalTo("obj_id",key);
    return query.destroyAll({
            success:function(){
             console.log("cache deletion complete")
         },
            error:function(err){
                console.warn("cache deletion failure ,error is + " + err);
            }
        }
    )
}

