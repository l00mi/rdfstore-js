var Store = require('./src/js-store/src/store.js');

Store.Store.create(function(store) {

  store.load('text/n3', 'data/sp2b_10k.n3', 'test_file', function(success, result) {
      console.log('Finished!');
      console.log(result);

      store.execute("SELECT DISTINCT ?s  FROM <test_file> { ?s ?p ?o }", function(succes,result) {
          console.log(result.count);
      });
  });

});
