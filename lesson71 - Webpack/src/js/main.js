
function MyModule() {
  this.hello = function() {
    console.log('Hello');
  };

  this.goodbye = function() {
    console.log('bye');
  };
}

module.exports = MyModule;
