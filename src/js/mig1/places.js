import '../../scss/mig1/places.scss';

/**
 *	Load More Results v1.0.0
 * Author: Cenk Çalgan
 */
(function($) {
  'use strict';

  $.fn.loadMoreResults = function(options) {
    var defaults = {
      tag: {
        name: 'div',
        class: 'item',
      },
      displayedItems: 5,
      showItems: 5,
      button: {
        class: 'btn-load-more',
        text: 'Load More',
      },
    };

    var opts = $.extend(true, {}, defaults, options);

    var alphaNumRE = /^[A-Za-z][-_A-Za-z0-9]+$/;
    var numRE = /^[0-9]+$/;

    $.each(opts, function validateOptions(key, val) {
      if (key === 'tag') {
        formatCheck(key, val, 'name', 'string');
        formatCheck(key, val, 'class', 'string');
      }
      if (key === 'displayedItems') {
        formatCheck(key, val, null, 'number');
      }
      if (key === 'showItems') {
        formatCheck(key, val, null, 'number');
      }
      if (key === 'button') {
        formatCheck(key, val, 'class', 'string');
      }
    });

    function formatCheck(key, val, prop, typ) {
      if (prop !== null && typeof prop !== 'object') {
        if (
          typeof val[prop] !== typ ||
          String(val[prop]).match(typ == 'string' ? alphaNumRE : numRE) === null
        ) {
          opts[key][prop] = defaults[key][prop];
        }
      } else {
        if (
          typeof val !== typ ||
          String(val).match(typ == 'string' ? alphaNumRE : numRE) === null
        ) {
          opts[key] = defaults[key];
        }
      }
    }

    return this.each(function(index, element) {
      var $list = $(element),
        lc = $list.find(' > ' + opts.tag.name + '.' + opts.tag.class).length,
        dc = parseInt(opts.displayedItems),
        sc = parseInt(opts.showItems);

      $list
        .find(' > ' + opts.tag.name + '.' + opts.tag.class + ':lt(' + dc + ')')
        .css('display', 'inline-block');
      $list
        .find(
          ' > ' + opts.tag.name + '.' + opts.tag.class + ':gt(' + (dc - 1) + ')'
        )
        .css('display', 'none');

      $list
        .parent()
        .append(
          '<button class="btn-view ' +
            opts.button.class +
            '">' +
            opts.button.text +
            '</button>'
        );
      $list.parent().on('click', '.btn-view', function(e) {
        if (window.innerWidth > 769) {
          window.scrollTo(0, document.body.scrollHeight);
        }
        e.preventDefault();
        dc = dc + sc <= lc ? dc + sc : lc;

        $list
          .find(
            ' > ' + opts.tag.name + '.' + opts.tag.class + ':lt(' + dc + ')'
          )
          .fadeIn();
        if (dc == lc) {
          $(this).hide();
          $('.wrapper').removeClass('gradient');
        }
      });
    });
  };
})(jQuery);

$(document).ready(function() {
  var item = $('.places .item');
  item.height(item.width());

  function makeHeight() {
    item.height(item.width());
  }

  window.addEventListener('resize', makeHeight);

  $('.loadMore').loadMoreResults({
    displayedItems: 9,
    showItems: 6,
    button: {
      class: 'btn-load-more',
      text: 'Daha çox',
    },
  });

  // bootsrap modal

  $('#Modal').on('show.bs.modal', function(event) {
    var target = $(event.relatedTarget);
    var t = target.find('p')[0];
    var d = target.find('p')[1];
    var i = target.find('img')[0];

    var title = t && t.innerText;
    var desc = d && d.innerText;
    var src = i && i.src;
    var modal = $(this);

    console.log(src);
    modal.find('.modal-title').text(title);
    modal.find('.modal-desc').text(desc);
    modal.find('.modal-img').attr('src', src);
  });
});
