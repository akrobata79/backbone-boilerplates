(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    definition(module.exports, localRequire(name), module);
    var exports = cache[name] = module.exports;
    return exports;
  };

  var require = function(name) {
    var path = expand(name, '.');

    if (has(cache, path)) return cache[path];
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex];
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '"');
  };

  var define = function(bundle) {
    for (var key in bundle) {
      if (has(bundle, key)) {
        modules[key] = bundle[key];
      }
    }
  }

  globals.require = require;
  globals.require.define = define;
  globals.require.brunch = true;
})();

window.require.define({"Application": function(exports, require, module) {
  //JavaScript////////////////////////////////////////////////////////////////////
  // 
  // Copyright 2012 
  // 
  ////////////////////////////////////////////////////////////////////////////////

  /**
   * Application Bootstrapper
   * 
   * @langversion JavaScript
   * 
   * @author 
   * @since  
   */

  Application = {

      //--------------------------------------
      //+ PUBLIC PROPERTIES / CONSTANTS
      //--------------------------------------

      //--------------------------------------
      //+ INHERITED / OVERRIDES
      //--------------------------------------

      initialize: function() {

  //        require('vendor/scripts/TweenLite')
          // Import views

  //        require('views/supers/View')
          var HomeView = require('views/HomeView');

          var Router = require('routers/Router');

          // Initialize views
          this.homeView = new HomeView();
          this.router = new Router();

  //        console.log("fin",document.getElementById("testCanvas"));


          if (typeof Object.freeze === 'function') Object.freeze(this);
      }
  }

  module.exports = Application;
  
}});

window.require.define({"classes/Curtain": function(exports, require, module) {
  
  (function(window) {

      function Curtain() {
          this.initialize();
      }

      Curtain.prototype = new Container();
      Curtain.prototype.Container_initialize = Curtain.prototype.initialize;	//unique to avoid overiding base class

      Curtain.prototype.img1;
      Curtain.prototype.img2;

      Curtain.prototype.initialize = function() {

          this.Container_initialize();

          this.img1 = new Bitmap("images/curtains_01.png");
          this.img2 = new Bitmap("images/curtains_02.png");
          this.addChild(this.img1);
          this.addChild(this.img2);

          this.img1.x=-320;
          this.img2.x=640;

          this.backo = _.bind( this.backo, this );

  //        setTimeout(this.backo,2000)

      };

      Curtain.prototype.do = function() {
          TweenLite.to(this.img2,0.5,{x:320,onComplete:this.backo});
          TweenLite.to(this.img1,0.5,{x:0 });
      };

      Curtain.prototype.backo = function() {
          TweenLite.to(this.img2,0.5,{x:640,delay:0.3});
          TweenLite.to(this.img1,0.5,{x:-320,delay:0.3 });
      }

      window.Curtain = Curtain;

  }(window));














  
}});

window.require.define({"classes/InfoPage": function(exports, require, module) {
  
  (function(window) {

      function InfoPage() {
          this.initialize();
      }

      InfoPage.prototype = new Container();
      InfoPage.prototype.Container_initialize = InfoPage.prototype.initialize;

      InfoPage.prototype.initialize = function() {

          this.Container_initialize();


          var btn = new RFButtonBitmap();
          btn.init("images/btnL1_def.png","images/btnL1_down.png");
          this.addChild(btn);
          btn.y=430;



      };

      window.InfoPage = InfoPage;

  }(window));














  
}});

window.require.define({"classes/MyClass": function(exports, require, module) {
  // Example use of require; or how you 'import' files

  //var SampleView = require('./views/SampleView');




  // Class definition
  MyClass = (function() {

  // private vars
      var _foo = 'bar';
      var _show = false;
  //    var _sampleView = new SampleView();

  // self-instantiating "constructor" function
      var initialize = (function() {
          console.log('Initialized');
      })();

  // private functions
      function show() {
          // show view
      };

      function hide() {
          // hide view
      };

  // public facing interface
      return {

          getFoo: function() {
              return _foo;
          },

          setFoo: function( value ) {
              if( value !== foo )
                  foo = value;
          },

          showView: function( doShow ) {
              ( doShow ) ?
                  show() :
                  hide();
          }
      };

  }).call();

  module.exports = MyClass;
}});

window.require.define({"classes/PatternPage": function(exports, require, module) {
  
  (function(window) {

      function PatternPage() {
          this.initialize();
      }

      PatternPage.prototype = new Container();
      PatternPage.prototype.Container_initialize = PatternPage.prototype.initialize;

      PatternPage.prototype.initialize = function() {

          this.Container_initialize();


          var btn = new RFButtonBitmap();
          btn.init("images/btnL1_def.png","images/btnL1_down.png");
          this.addChild(btn);
          btn.y=230;



      };

      window.PatternPage = PatternPage;

  }(window));














  
}});

window.require.define({"classes/PlusPage": function(exports, require, module) {
  

  require('classes/PlusPageButtons');

  (function(window) {

      function PlusPage() {
          this.initialize();
      }

      PlusPage.prototype = new Container();

      PlusPage.prototype.Container_initialize = PlusPage.prototype.initialize;
      PlusPage.prototype.initialize = function() {

          console.log("111");

          this.Container_initialize();

          var list = new RFScrollableList();
          this.addChild(list);
          list.init("y",PlusPageButtons,{w:100,h:40},5);

          list.y=130;





      };

      window.PlusPage = PlusPage;

  }(window));














  
}});

window.require.define({"classes/PlusPageButtons": function(exports, require, module) {
  
  (function() {

      var PlusPageButtons = function() {this.initialize();}

      PlusPageButtons.prototype = p = new RFScrollableElement();

      p.label;
      p.background;
      p.text;

      p.sup_setSize = p.setSize;
      p.setSize = function(w,h) {
          this.sup_setSize(w,h);
      };

      p.init = function() {

          this.label = "yo00000000";


          this.text = new createjs.Text(this.label, "20px Arial", "#000");
          this.text.textBaseline = "top";
          this.text.textAlign = "center";
         // this.text.text="ggggg"

          var width = 100+30;
          var height = 40+20;

          this.background = new createjs.Shape();
          this.background.graphics.beginFill( "#CCC").drawRoundRect(0,0,width,height,10);

  //        text.x = width/2;
  //        text.y = 10;

          this.addChild(this.background,this.text);
          console.log("333");

      };

      p.setLabel=function(label){

  //        console.log("labellllll",label);

          this.text.text=label;
      }

      window.PlusPageButtons = PlusPageButtons;
  }());


  // ---------------------------
  //      ???
  //      p.Container_initialize = p.initialize;
  //      ???
  //      this.Container_initialize();
  // ---------------------------



  //(function() {
  //
  //    var RFScrollableElement = function() {
  //        this.initialize();
  //    }
  //    var p = RFScrollableElement.prototype = new createjs.Container(); // inherit from Container
  //
  //    p.label;
  //    p.background;
  //    p.count = 0;
  //
  //    p.Container_initialize = p.initialize;
  //
  //    p.initialize = function() {
  //        this.Container_initialize();
  //
  //        console.log("RFScrollableElement");
  //    }
  //
  //    window.RFScrollableElement = RFScrollableElement;
  //}());
}});

window.require.define({"classes/RFNav": function(exports, require, module) {
  
  RFNav = (function() {

      var _foo = 'bar';
      var _show = false;

      var _btnArr=null;
      var _curtain=null;

      var _pageEvent=null;
      var _currSelected;

      var initialize = (function() {
          console.log('Initialized');
      })();

      function show() {
          console.log("show");
          // show view
      };

      function hide() {
          console.log("hide");
          // hide view
      };

      return {

          getFoo: function() {
              return _foo;
          },

          getCurrSelected: function() {
            return _currSelected;
          },

          setFoo: function( value ) {
              if( value !== _foo )
                  _foo = value;
          },

          showView: function( doShow ) {
              ( doShow ) ? show() : hide();
          },

          setup: function(arr,curtain) {
              _curtain=curtain;
              _btnArr=arr;

              this.onButtonClicked = _.bind( this.onButtonClicked, this );
              EventBus.addEventListener("NAVBTN_EVENTS", this.onButtonClicked);


              for ( var i = 0; i < arr.length; i++) {
                  _btnArr[i].radioBtn=true
                  _btnArr[i].eventName="NAVBTN_EVENTS";
              }

          },

          onButtonClicked: function(e) {

              for ( var i = 0; i < _btnArr.length; i++) {
                  if(_btnArr[i]!= e.target) {_btnArr[i].setState(1)} else { _currSelected = i }
              }

              _curtain.do();

              console.log("_pageEvent",_pageEvent);
              EventBus.dispatch(_pageEvent,this);

          },

          setPageEvent: function(t) {
              _pageEvent=t;
          },

          setActiveBtn: function(target) {

  //            for (var i in _btnArr) {
  //                if (target!=_btnArr[i]) {_btnArr[i].setState(1)} else
  //                {_btnArr[i].setState(2)}
  //            }
          }

      };

  }).call();

  module.exports = RFNav;
}});

window.require.define({"classes/ScreenManager": function(exports, require, module) {
  
  (function(window) {

      function ScreenManager() {
          this.initialize();
      };

      require('classes/PlusPage');
      require('classes/InfoPage');
      require('classes/PatternPage');

      ScreenManager.prototype.plusPage;
      ScreenManager.prototype.patternPage;
      ScreenManager.prototype.infoPage;

      ScreenManager.prototype.currPage;
      ScreenManager.prototype.pageArr;

      ScreenManager.prototype.navEvent;

      ScreenManager.prototype = new Container();

      ScreenManager.prototype.Container_initialize = ScreenManager.prototype.initialize;

      ScreenManager.prototype.initialize = function() {

          this.Container_initialize();

          this.plusPage = new PlusPage();
          this.addChild(this.plusPage);

          this.patternPage = new PatternPage();
          this.addChild(this.patternPage);

          this.infoPage = new InfoPage();
          this.addChild(this.infoPage);

          this.pageArr = [this.plusPage,this.patternPage,this.infoPage]

          this.onNavEvent = _.bind( this.onNavEvent, this );
          this.setPage(0)

      };

      ScreenManager.prototype.setPage = function(num) {

          if(this.currPage!=num) {

              this.currPage=num;

              for (var i = 0; i < this.pageArr.length; i++) {

                  if(i!=this.currPage) {
                      this.pageArr[i].visible=false;

                  } else {
                      this.pageArr[i].visible=true;
                  }

              }

          }

      };

      ScreenManager.prototype.setController = function(nav,navEvent) {
          EventBus.addEventListener(navEvent, this.onNavEvent);

      }

      ScreenManager.prototype.onNavEvent = function(e) {
          console.log("onNavEvent", e.target.getCurrSelected(),this);
          this.setPage(e.target.getCurrSelected())
      }

      window.ScreenManager = ScreenManager;

  }(window));














  
}});

window.require.define({"config/ApplicationConfig": function(exports, require, module) {
  /**
   * Application Configuration
   * 
   * @langversion JavaScript
   * 
   * @author 
   * @since  
   */

  var ApplicationConfig = (function() {

  	/*
     	 * @private
  	 */
  	var _baseUrl = "/";

  	/*
     	 * Public interface
  	 */
  	return {
  		BASE_URL: _baseUrl
  	}

  }).call()

  module.exports = ApplicationConfig;
}});

window.require.define({"events/ApplicationEvents": function(exports, require, module) {
  /**
   * Application Events
   * 
   * @langversion JavaScript
   * 
   * @author 
   * @since  
   */

  var ApplicationEvents = (function() {

  	/*
     	 * @private
  	 */
  	var _applicationInitialized = "onApplicationInitialized";

  	/*
     	 * Public interface
  	 */
  	return {
  		APPLICATION_INITIALIZED: _applicationInitialized
  	}
  	
  }).call();

  module.exports = ApplicationConfig;
}});

window.require.define({"helpers/ViewHelper": function(exports, require, module) {
  /**
   * Handlebars Template Helpers
   * 
   * @langversion JavaScript
   * 
   * @author 
   * @since  
   */


  //--------------------------------------
  //+ PUBLIC PROPERTIES / CONSTANTS
  //--------------------------------------

  //--------------------------------------
  //+ PUBLIC METHODS / GETTERS / SETTERS
  //--------------------------------------

  /*
  * @return String
  */
  Handlebars.registerHelper( 'link', function( text, url ) {

    text = Handlebars.Utils.escapeExpression( text );
    url  = Handlebars.Utils.escapeExpression( url );

    var result = '<a href="' + url + '">' + text + '</a>';

    return new Handlebars.SafeString( result );
  });
  
}});

window.require.define({"initialize": function(exports, require, module) {
  
  /**
   * Application Initializer
   * 
   * @langversion JavaScript
   * 
   * @author 
   * @since  
   */

  var application = require('Application');

  $(function() {

  	// Initialize Application
  	application.initialize();

  	// Start Backbone router
    	Backbone.history.start();
  });
  
}});

window.require.define({"models/supers/Collection": function(exports, require, module) {
  /**
   * Base Class for all Backbone Collections
   * 
   * @langversion JavaScript
   * 
   * @author 
   * @since  
   */

  module.exports = Backbone.Collection.extend({

  	//--------------------------------------
  	//+ PUBLIC PROPERTIES / CONSTANTS
  	//--------------------------------------

  	//--------------------------------------
  	//+ INHERITED / OVERRIDES
  	//--------------------------------------
  	
  	//--------------------------------------
    	//+ PUBLIC METHODS / GETTERS / SETTERS
    	//--------------------------------------

    	//--------------------------------------
    	//+ EVENT HANDLERS
    	//--------------------------------------

    	//--------------------------------------
    	//+ PRIVATE AND PROTECTED METHODS
    	//--------------------------------------

  });
  
}});

window.require.define({"models/supers/Model": function(exports, require, module) {
  /**
   * Base Class for all Backbone Models
   * 
   * @langversion JavaScript
   * 
   * @author 
   * @since  
   */

  module.exports = Backbone.Model.extend({

  	//--------------------------------------
  	//+ PUBLIC PROPERTIES / CONSTANTS
  	//--------------------------------------

  	//--------------------------------------
  	//+ INHERITED / OVERRIDES
  	//--------------------------------------
  	
  	//--------------------------------------
    	//+ PUBLIC METHODS / GETTERS / SETTERS
    	//--------------------------------------

    	//--------------------------------------
    	//+ EVENT HANDLERS
    	//--------------------------------------

    	//--------------------------------------
    	//+ PRIVATE AND PROTECTED METHODS
    	//--------------------------------------
    
  });
  
}});

window.require.define({"routers/Router": function(exports, require, module) {
  /**
   * Backbone Primary Router
   * 
   * @langversion JavaScript
   * 
   * @author 
   * @since  
   */

  var application = require('Application');

  module.exports = Backbone.Router.extend({

  	//--------------------------------------
    	//+ Routes
    	//--------------------------------------
    	
    	routes: {
        '': 'home'
    	},

    	//--------------------------------------
    	//+ Route Handlers
    	//--------------------------------------

    	home: function() {
        $( 'body' ).html( application.homeView.render().el );
    	}
  });
  
}});

window.require.define({"utils/BackboneView": function(exports, require, module) {
  /**
   * View Description
   * 
   * @langversion JavaScript
   * 
   * @author 
   * @since  
   */

  var View = require('./supers/View');
  var template = require('templates/HomeViewTemplate');

  module.exports = View.extend({

  	//--------------------------------------
  	//+ PUBLIC PROPERTIES / CONSTANTS
  	//--------------------------------------

    	/*
     	 * @private
  	 */
  	id: 'view',
  	/*
     	 * @private
     	*/
  	template: template,

  	//--------------------------------------
    	//+ INHERITED / OVERRIDES
    	//--------------------------------------

  	/*
  	 * @private
  	 */
  	initialize: function() {
  		this.render = _.bind( this.render, this );
  	},

  	/*
  	 * @private
  	 */
  	render: function() {
  		this.$el.html( this.template( this.getRenderData() ) );

  		return this;
  	},

  	/*
  	 * @private
  	 */
  	getRenderData: function() {
  		return {
  			content: "View Content"
  		}
  	}

  	//--------------------------------------
  	//+ PUBLIC METHODS / GETTERS / SETTERS
  	//--------------------------------------

  	//--------------------------------------
  	//+ EVENT HANDLERS
  	//--------------------------------------

  	//--------------------------------------
  	//+ PRIVATE AND PROTECTED METHODS
  	//--------------------------------------

  });
  
}});

window.require.define({"views/HomeView": function(exports, require, module) {
  /**
   * View Description
   *
   * @langversion JavaScript
   *
   * @author
   * @since
   *
   * http://krasimirtsonev.com/blog/article/javascript-managing-events-dispatch-listen
   * So, to pass params, all you need to do is save off the super initialize method, overwrite it, and then call it with the appropriate params. Similar to draw in all the DisplayObject subclasses. It's clearer in code:
   * https://groups.google.com/forum/#!topic/easeljs/qdK6VFSACQw
   */

  var View = require('./supers/View');
  var template = require('./templates/HomeViewTemplate');


  require('classes/Curtain');
  require('classes/ScreenManager');
  require('classes/PlusPageButtons');
  //require('rf/RF');


  //var MyClass = require('classes/MyClass');

  //require

  module.exports = View.extend({

      //--------------------------------------
      //+ PUBLIC PROPERTIES / CONSTANTS
      //--------------------------------------

      /*
       * @private
       */
      id: 'home-view',
      /*
       * @private
       */
      template: template,

      myC:null,
      stage:null,


      //--------------------------------------
      //+ INHERITED / OVERRIDES
      //--------------------------------------

      /*
       * @private
       */
      initialize: function() {

          this.render = _.bind( this.render, this );
          console.log(">>>", $(this.el), $("#home-view"),document.getElementById("home-view"));

      },

      /*
       * @private
       */
      render: function() {

          var canvas = document.createElement("canvas");
          this.el=canvas;

          $('body').append(this.el);

          this.el.width=640;
          this.el.height=920;

          this.updateView();
          return this;

      },

      yo:function (e) {

          console.log("asi",e);
      },

      updateView: function() {

          console.log("q");

          this.stage = new Stage(this.el);
          Touch.enable ( this.stage , false , false );
          RF.stage=this.stage;

  //Stage
          //BACKGROUND
          var bmp = new Bitmap("images/BACK.jpg");
          this.stage.addChild(bmp);

  //        this.stage.alpha=0.1;

          //SCREENMANAGER
          var screenManager = new ScreenManager();
          this.stage.addChild(screenManager);

          //CURTAIN
          curtain = new Curtain();
  //        this.stage.addChild(curtain);

          //NAV
          var navBtn1 = new RFButtonBitmap();
          navBtn1.init("images/Navigation_def_01.png","images/Navigation_down_01.png");
          this.stage.addChild(navBtn1);
          navBtn1.y=691;

          var navBtn2 = new RFButtonBitmap();
          navBtn2.init("images/Navigation_def_02.png","images/Navigation_down_02.png");
          this.stage.addChild(navBtn2);
          navBtn2.x=216;
          navBtn2.y=691;

          var navBtn3 = new RFButtonBitmap();
          navBtn3.init("images/Navigation_def_04.png","images/Navigation_down_04.png");
          this.stage.addChild(navBtn3);
          navBtn3.x=216+205;
          navBtn3.y=691;

          var nav = require('classes/RFNav');
          nav.setup([navBtn1,navBtn2,navBtn3],curtain);
          nav.setPageEvent("PAGE_CHANGE_EVENT")
          //SCREENMANAGER
          screenManager.setController(nav,"PAGE_CHANGE_EVENT");

          console.log("RF",RF);

          //FOOTER
          var f = new Bitmap("images/footer.png");
          this.stage.addChild(f);
          f.y=833;

          //TOP
          var top = new Bitmap("images/top.png");
          this.stage.addChild(top);

          Ticker.addListener(this);
          Ticker.setFPS(60);

      },

      myFunction: function(e) {
          console.log("eee",e);
      },


      do:function() {

          curtain.do();

      },


      tick: function() {
          this.stage.update();
      },

      /*
       * @private
       */
      getRenderData: function() {
          return {
              content: "Application Contentoooooo"
          }
      }

      //--------------------------------------
      //+ PUBLIC METHODS / GETTERS / SETTERS
      //--------------------------------------

      //--------------------------------------
      //+ EVENT HANDLERS
      //--------------------------------------

      //--------------------------------------
      //+ PRIVATE AND PROTECTED METHODS
      //--------------------------------------

  });

  // setInterval(this.donow,1000);
  //
  //donow:function () {
  //
  //    var smallSh = new Bitmap("images/btn1.png");
  //    this.stage.addChild(smallSh);
  //
  //    TweenLite.to(smallSh, 1, {x:200,y:300});
  //
  //},

  //        this.el.width=640;
  //        this.el.height=920;

  //        canvas = document.createElement("canvas");
  //        canvas.width = "640";
  //        canvas.height = "920"; // allow 40 pixels for status bar on iOS
  //        canvas.style.width = "320px";
  //        canvas.style.height = "460px";
}});

window.require.define({"views/supers/View": function(exports, require, module) {
  /**
   * View Base Class
   * 
   * @langversion JavaScript
   * 
   * @author 
   * @since  
   */

  require('helpers/ViewHelper');

  module.exports = Backbone.View.extend({

    //--------------------------------------
    //+ PUBLIC PROPERTIES / CONSTANTS
    //--------------------------------------

    /*
     * @private
     */
    template: function() {},
    /*
     * @private
     */
    getRenderData: function() {},

    //--------------------------------------
    //+ INHERITED / OVERRIDES
    //--------------------------------------
    
    /*
     * @private
     */
    initialize: function() {
      this.render = _.bind(this.render, this);
    },

    /*
     * @private
     */
    render: function() {
      this.$el.html( this.template( this.getRenderData() ) );
      this.afterRender();
      
      return this;
    },

    /*
     * @private
     */
    afterRender: function() {}

    //--------------------------------------
    //+ PUBLIC METHODS / GETTERS / SETTERS
    //--------------------------------------

    //--------------------------------------
    //+ EVENT HANDLERS
    //--------------------------------------

    //--------------------------------------
    //+ PRIVATE AND PROTECTED METHODS
    //--------------------------------------

  });
  
}});

