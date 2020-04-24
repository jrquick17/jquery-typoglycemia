jQuery = typeof jQuery === 'undefined' ? $ : jQuery;

jQuery.typoglycemia = function(text) {
  var output = '';

  text.split(' ').forEach(
    function(word) {
      var length = word.length;
      if (length > 3) {
        var first = word.substr(0, 1);
        var last = word.substr(-1, 1);

        var middleLength = length - 2;
        var middle = word.substr(1, middleLength);
        var middleArray = middle.split('');

        for(var i = middleLength - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));

          var tmp = middleArray[i];

          middleArray[i] = middleArray[j];
          middleArray[j] = tmp;
        }

        middle = middleArray.join('');

        word = first + middle + last;
      }

      output += ' ' + word;
    }
  );

  return output.substr(1);
};

jQuery.fn.typoglycemia = function() {
  jQuery(this).get().forEach(
    function(element) {
      if (typeof element.innerText !== 'undefined' && element.innerText !== '') {
        element.innerText = jQuery.typoglycemia(element.innerText);
      }

      if (typeof element.value !== 'undefined' && element.value !== '') {
        element.value = jQuery.typoglycemia(element.value);
      }
    }
  );
};
