var CRUMINA = {};
!(function (e) {
  "use strict";
  var t = e(window),
    i = e(document),
    n = e("body"),
    a = e(".pie-chart"),
    o = e("#site-header"),
    s = e(".counter"),
    r = e(".crumina-skills-item"),
    l = e("#hellopreloader");
  function c(t) {
    return t.id
      ? e(
          '<span ><img class="woox-icon" sytle="display: inline-block;" src="img/' +
            t.element.value.toLowerCase() +
            '.png" /> ' +
            t.text +
            "</span>"
        )
      : t.text;
  }
  (CRUMINA.preloader = function () {
    return (
      t.scrollTop(0),
      setTimeout(function () {
        l.fadeOut(800);
      }, 500),
      !1
    );
  }),
    (CRUMINA.flyingBalls = function () {
      setTimeout(function () {
        e(".particles-js").each(function () {
          var t = "particle-" + (Math.floor(889 * Math.random()) + 111);
          e(this).attr("id", t),
            particlesJS.load(
              t,
              "./js/" + e(this).data("settings") + ".json",
              function () {}
            );
        });
      }, 500);
    }),
    (CRUMINA.fixedHeader = function () {
      o.headroom({
        offset: 10,
        tolerance: 5,
        classes: {
          initial: "animated",
          pinned: "slideDown",
          unpinned: "slideUp",
        },
      });
    }),
    jQuery(".back-to-top").on("click", function () {
      return e("html,body").animate({ scrollTop: 0 }, 1200), !1;
    }),
    (CRUMINA.counters = function () {
      s.length &&
        s.each(function () {
          jQuery(this).waypoint(
            function () {
              e(this.element).find("span").countTo(), this.destroy();
            },
            { offset: "95%" }
          );
        });
    }),
    (CRUMINA.IsotopeSort = function () {
      e(".sorting-container").each(function () {
        var t = e(this),
          i = t.data("layout").length ? t.data("layout") : "masonry";
        t.isotope({
          itemSelector: ".sorting-item",
          layoutMode: i,
          percentPosition: !0,
        }),
          t.imagesLoaded().progress(function () {
            t.isotope("layout");
          }),
          t
            .siblings(".sorting-menu")
            .find("li")
            .on("click", function () {
              if (e(this).hasClass("active")) return !1;
              e(this).parent().find(".active").removeClass("active"),
                e(this).addClass("active");
              var i = e(this).data("filter");
              return void 0 !== i ? (t.isotope({ filter: i }), !1) : void 0;
            });
      });
    }),
    (CRUMINA.rangeSlider = function () {
      e(".range-slider-js").ionRangeSlider({
        type: "double",
        grid: !0,
        min: 0,
        max: 1e3,
        from: 200,
        to: 800,
        prefix: "$",
      });
    }),
    (CRUMINA.mediaPopups = function () {
      e(".js-popup-iframe").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1,
      }),
        e(".js-zoom-image, .link-image").magnificPopup({
          type: "image",
          removalDelay: 500,
          callbacks: {
            beforeOpen: function () {
              (this.st.image.markup = this.st.image.markup.replace(
                "mfp-figure",
                "mfp-figure mfp-with-anim"
              )),
                (this.st.mainClass = "mfp-zoom-in");
            },
          },
          closeOnContentClick: !0,
          midClick: !0,
        });
    }),
    (CRUMINA.progresBars = function () {
      r.length &&
        r.each(function () {
          jQuery(this).waypoint(
            function () {
              e(this.element).find(".count-animate").countTo(),
                e(this.element)
                  .find(".skills-item-meter-active")
                  .fadeTo(300, 1)
                  .addClass("skills-animate"),
                this.destroy();
            },
            { offset: "90%" }
          );
        });
    }),
    (CRUMINA.pieCharts = function () {
      a.length &&
        a.each(function () {
          jQuery(this).waypoint(
            function () {
              var t = e(this.element),
                i = t.data("start-color"),
                n = t.data("end-color"),
                a = 100 * t.data("value");
              t
                .circleProgress({
                  thickness: 16,
                  startAngle: (-Math.PI / 4) * 2,
                  emptyFill: "transparent",
                  lineCap: "round",
                  fill: { gradient: [i, n], gradientAngle: Math.PI / 4 },
                })
                .on("circle-animation-progress", function (e, i) {
                  t.find(".content").html(
                    parseInt(a * i, 10) + "<span>%</span>"
                  );
                })
                .on("circle-animation-end", function () {}),
                this.destroy();
            },
            { offset: "90%" }
          );
        });
    }),
    (CRUMINA.Swiper = {
      $swipers: {},
      init: function () {
        var t = this;
        e(".swiper-container").each(function (i) {
          var n = e(this),
            a = "swiper-unique-id-" + i;
          n.addClass(a + " initialized").attr("id", a),
            n
              .closest(".crumina-module")
              .find(".swiper-pagination")
              .addClass("pagination-" + a),
            (t.$swipers[a] = new Swiper("#" + a, t.getParams(n, a))),
            t.addEventListeners(t.$swipers[a]);
        });
      },
      getParams: function (e, t) {
        var i = {
          parallax: !0,
          breakpoints: !1,
          keyboardControl: !0,
          setWrapperSize: !0,
          preloadImages: !0,
          updateOnImagesReady: !0,
          prevNext: !!e.data("prev-next") && e.data("prev-next"),
          changeHandler: e.data("change-handler")
            ? e.data("change-handler")
            : "",
          direction: e.data("direction") ? e.data("direction") : "horizontal",
          mousewheel: !!e.data("mouse-scroll") && { releaseOnEdges: !0 },
          slidesPerView: e.data("show-items") ? e.data("show-items") : 1,
          slidesPerGroup: e.data("scroll-items") ? e.data("scroll-items") : 1,
          spaceBetween:
            e.data("space-between") || 0 == e.data("space-between")
              ? e.data("space-between")
              : 20,
          centeredSlides:
            !!e.data("centered-slider") && e.data("centered-slider"),
          autoplay: !!e.data("autoplay") && {
            delay: parseInt(e.data("autoplay")),
          },
          autoHeight: !!e.hasClass("auto-height"),
          loop: 0 != e.data("loop") || e.data("loop"),
          effect: e.data("effect") ? e.data("effect") : "slide",
          pagination: {
            type: e.data("pagination") ? e.data("pagination") : "bullets",
            el: ".pagination-" + t,
            clickable: !0,
          },
          coverflow: {
            stretch: e.data("stretch") ? e.data("stretch") : 0,
            depth: e.data("depth") ? e.data("depth") : 0,
            slideShadows: !1,
            rotate: 0,
            modifier: 2,
          },
          fade: { crossFade: !e.data("crossfade") || e.data("crossfade") },
        };
        return (
          i.slidesPerView > 1 &&
            (i.breakpoints = {
              320: { slidesPerView: 1, slidesPerGroup: 1 },
              480: { slidesPerView: 2, slidesPerGroup: 2 },
              769: {
                slidesPerView: i.slidesPerView,
                slidesPerGroup: i.slidesPerView,
              },
            }),
          i
        );
      },
      addEventListeners: function (t) {
        var i = this,
          n = t.$el.closest(".crumina-module-slider");
        t.params.prevNext &&
          n.on("click", ".swiper-btn-next, .swiper-btn-prev", function (i) {
            i.preventDefault(),
              e(this).hasClass("swiper-btn-next")
                ? t.slideNext()
                : t.slidePrev();
          }),
          n.on("click", ".slider-slides .slides-item", function (i) {
            i.preventDefault();
            var n = e(this);
            t.params.loop ? t.slideToLoop(n.index()) : t.slideTo(n.index());
          }),
          n.on("click", ".time-line-slides .slides-item", function (a) {
            a.preventDefault();
            var o = e(this);
            i.changes.timeLine(t, n, i, o.index());
          }),
          t.on("slideChange", function () {
            var e = i.changes[t.params.changeHandler];
            "function" == typeof e && e(t, n, i, this.realIndex);
          });
      },
      changes: {
        thumbsParent: function (e, t) {
          var i = t.find(".slider-slides .slides-item");
          i.removeClass("swiper-slide-active"),
            i.eq(e.realIndex).addClass("swiper-slide-active");
        },
        timeParent: function (e, t, i, n) {
          var a = t.find(".swiper-time-line").attr("id"),
            o = i.$swipers[a];
          o.slideTo(n), i.changes.timeLine(o, t, i, n);
        },
        timeLine: function (e, t, i, n) {
          var a = e.$el.find(".swiper-slide"),
            o = a.eq(n);
          o.hasClass("time-active") ||
            (a.removeClass("time-active"),
            o.addClass("time-active").removeClass("visited"),
            o.prevAll(".swiper-slide").addClass("visited"),
            o.nextAll(".swiper-slide").removeClass("visited"));
        },
      },
    }),
    e(".js-open-popup").on("click", function () {
      return (
        e(this)
          .closest(".has-popup")
          .find(".window-popup")
          .toggleClass("active"),
        n.toggleClass("popup-active"),
        !1
      );
    }),
    jQuery(".accordion-heading").on("click", function () {
      jQuery(this).parents(".panel-heading").toggleClass("active"),
        jQuery(this).parents(".accordion-panel").toggleClass("active");
    }),
    (CRUMINA.select2Init = function () {
      e(".woox--select").select2();
    }),
    (CRUMINA.select2LS = function () {
      var t = e(".language-switcher");
      t.select2({ templateResult: c }),
        t.on("select2:select", function (e) {
          var t = e.params.data,
            i = jQuery(t.element);
          if (i.length && !0 === t.selected && !0 !== t.disabled) {
            var n = i.data("href");
            n && (location.href = n);
          }
        });
    }),
    e(".custom-dropdown").on("click", ".init", function () {
      e(this).closest(".custom-dropdown").children("li:not(.init)").toggle();
    });
  var d = e(".custom-dropdown").children("li:not(.init)");
  e(".custom-dropdown").on("click", "li:not(.init)", function () {
    d.removeClass("selected"),
      e(this).addClass("selected"),
      e(".custom-dropdown").children(".init").html(e(this).html()),
      d.toggle();
  }),
    (CRUMINA.overlayMenu = function () {
      e(".js-open-aside").click(function () {
        e("body").toggleClass("popup-active"),
          e("#overlay-menu").toggleClass("open");
      });
    }),
    (CRUMINA.fixSubmenuBottom = function () {
      var t = e("#overlay-menu").find(".sub-menu");
      if (e(window).innerWidth() > 1024)
        for (
          var i = e(".overlay-menu").outerHeight(!0), n = 0;
          n < t.length;
          n++
        ) {
          var a = e(t[n]).css("display", "block").offset().top;
          (e(t[n]).outerHeight() + a > i ||
            i == e(t[n]).outerHeight() ||
            i - a < 350) &&
            e(t[n]).addClass("sub-menu-bottom");
        }
    }),
    (CRUMINA.overlayBody = function () {
      e(".js-body-overlay").click(function () {
        e("body").toggleClass("body-overlay-active");
      });
    }),
    (CRUMINA.Materialize = function () {
      e.material.init(),
        e(".checkbox > label").on("click", function () {
          e(this).closest(".checkbox").addClass("clicked");
        }),
        e(".datepicker").datepicker();
    }),
    (CRUMINA.standardPicker = function () {
      e(".standard-datetimepicker").datetimepicker({
        inline: !0,
        timepicker: !1,
        format: "d.m.Y",
        dayOfWeekStart: 1,
      });
    }),
    (CRUMINA.mainMenu = {
      $links: null,
      init: function () {
        this.$links = e(".overlay-menu-list > .overlay-menu-item");
      },
      addEventListeners: function () {
        var t = this;
        this.removeEventListeners(),
          CRUMINA.isTouch()
            ? (e(document).on("click.menu", function (i) {
                var n = e(i.target);
                n.closest(".overlay-menu-item").length ||
                  n.hasClass("overlay-menu-item") ||
                  t.$links.find(".sub-menu").removeClass("open");
              }),
              this.$links.on("click.menu", function () {
                var i = e(this),
                  n = i.find(".sub-menu");
                n.hasClass("open")
                  ? n.removeClass("open")
                  : (t.$links.find(".sub-menu").removeClass("open"),
                    i.find(".sub-menu").addClass("open"));
              }))
            : this.$links.on("mouseenter.menu mouseleave.menu", function (t) {
                var i = e(this);
                "mouseenter" === t.type && i.find(".sub-menu").addClass("open"),
                  "mouseleave" === t.type &&
                    i.find(".sub-menu").removeClass("open");
              });
      },
      removeEventListeners: function () {
        e(document).off(".menu"), this.$links.off(".menu");
      },
    }),
    (CRUMINA.isTouch = function () {
      return !!(
        navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
      );
    }),
    (CRUMINA.parallaxBackground = function () {
      e(".scene").each(function () {
        var t = "scene-" + (Math.floor(889 * Math.random()) + 111);
        e(this).attr("id", t);
        var i = document.getElementById(t);
        new Parallax(i);
      });
    }),
    (CRUMINA.updateResponsiveInit = function () {
      var t = null;
      e(window)
        .on("resize", function () {
          null === t &&
            (t = window.setTimeout(function () {
              (t = null), CRUMINA.mainMenu.addEventListeners();
            }, 200));
        })
        .resize();
    }),
    t.keydown(function (t) {
      27 == t.which &&
        (e("#overlay-menu").removeClass("open"),
        n.removeClass("popup-active"),
        e(".window-popup").removeClass("active"),
        n.removeClass("body-overlay-active"));
    }),
    (CRUMINA.maps = {
      maps: {
        mapMain: {
          config: {
            id: "map",
            map: {
              center: new L.LatLng(-37.613611, 144.963056),
              zoom: 10,
              maxZoom: 18,
              layers: new L.tileLayer(
                "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
                {
                  attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                  subdomains: "abcd",
                  maxZoom: 19,
                }
              ),
            },
            icon: {
              iconSize: [70, 87],
              iconAnchor: [22, 94],
              className: "icon-map",
            },
            cluster: { iconSize: [40, 40] },
          },
          markers: [
            { coords: [-37.813611, 144.963056], icon: "marker-google.png" },
          ],
        },
        mapFull: {
          config: {
            id: "map-full-height",
            map: {
              center: new L.LatLng(-37.613611, 144.963056),
              zoom: 10,
              maxZoom: 18,
              layers: new L.tileLayer(
                "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
                {
                  attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
                  subdomains: "abcd",
                  maxZoom: 19,
                }
              ),
            },
            icon: {
              iconSize: [70, 87],
              iconAnchor: [22, 94],
              className: "icon-map",
            },
            cluster: { iconSize: [40, 49] },
          },
          markers: [
            { coords: [-37.813611, 144.963056], icon: "marker-google.png" },
          ],
        },
      },
      init: function () {
        for (var e in this.maps) {
          var t = this.maps[e];
          if (t.config && t.markers && document.getElementById(t.config.id)) {
            var i = new L.map(t.config.id, t.config.map),
              n = L.markerClusterGroup({
                iconCreateFunction: function (i) {
                  var n = i.getChildCount(),
                    a = t.config.cluster;
                  return new L.DivIcon({
                    html: "<div><span>" + n + "</span></div>",
                    className: "marker-cluster marker-cluster-" + e,
                    iconSize: new L.Point(a.iconSize[0], a.iconSize[1]),
                  });
                },
              });
            t.markers.forEach(function (e) {
              t.config.icon.iconUrl = "./img/" + e.icon;
              var i = L.icon(t.config.icon),
                a = L.marker(e.coords, { icon: i });
              n.addLayer(a);
            }),
              i.addLayer(n),
              this.disableScroll(jQuery("#" + t.config.id), i);
          }
        }
      },
      disableScroll: function (e, t) {
        t.scrollWheelZoom.disable(),
          e.bind("mousewheel DOMMouseScroll", function (e) {
            e.stopPropagation(),
              1 == e.ctrlKey
                ? (e.preventDefault(),
                  t.scrollWheelZoom.enable(),
                  setTimeout(function () {
                    t.scrollWheelZoom.disable();
                  }, 1e3))
                : t.scrollWheelZoom.disable();
          });
      },
    }),
    i.ready(function () {
      CRUMINA.fixedHeader(),
        CRUMINA.Materialize(),
        CRUMINA.Swiper.init(),
        CRUMINA.select2Init(),
        CRUMINA.mediaPopups(),
        CRUMINA.IsotopeSort(),
        CRUMINA.overlayMenu(),
        CRUMINA.overlayBody(),
        CRUMINA.flyingBalls(),
        CRUMINA.maps.init(),
        CRUMINA.standardPicker(),
        CRUMINA.parallaxBackground(),
        CRUMINA.fixSubmenuBottom(),
        CRUMINA.select2LS(),
        CRUMINA.rangeSlider(),
        CRUMINA.progresBars(),
        CRUMINA.pieCharts(),
        CRUMINA.counters(),
        e(".perfect-scroll").perfectScrollbar({ wheelPropagation: !1 }),
        CRUMINA.mainMenu.init(),
        CRUMINA.updateResponsiveInit();
    });
})(jQuery);
