field.on('keydown', function(e){
	var keynum = window.event ? window.event.keyCode : e.which;

	if( keynum != 16 && keynum != 20 && keynum != 17 && keynum != 18 && keynum != 37 && keynum != 38 && keynum != 39 && keynum != 40 ){

		var i, j;
		var length = this.value.replace(/[^0-9a-zA-Z]/g,'');

		length = length.length;

		this.mask = this.getAttribute( 'data-mask' );
		this.maskShow = !( this.getAttribute( 'data-mask-show' ) == 'false' );
		this.positions = {};
		this.positionsLength = 0;

		for( i=0; i<this.mask.length; i++ ){
			j = this.mask.substr(i, 1);
			if( j === '_' ){
				this.positions[i] = '_';
				this.positionsLength++;
			}
		}

		if( length >= this.positionsLength && keynum != 8 ){
			return false;
		}
	}
});

field.on('keyup', function(e){
	//return true;
	var keynum = window.event ? window.event.keyCode : e.which;

	if( keynum != 16 && keynum != 20 && keynum != 17 && keynum != 18 && keynum != 37 && keynum != 38 && keynum != 39 && keynum != 40 ){
		var value = this.value.replace(/[^0-9a-zA-Z]/g,'');
		var i, j, p;

		i = 0;
		for( p in this.positions ){
			j = parseInt(p) + 1;
			if( value.length == i ){
				break;
			}
			if( this.positions[ p ] === '_' ){
				this.positions[ p ] = value.substr(i, 1);
			}
			this.mask = this.mask.substr(0, p)+this.positions[ p ]+this.mask.substr(j, this.mask.length);
			i++;
		}
		if( value.length < this.positionsLength ){
			j--;
		}

		if( !this.maskShow ){
			this.mask = this.mask.replace(/[^0-9a-zA-Z]/g,'');
		}

		this.value = this.mask;
		this.selectionStart = j;
		this.selectionEnd = j;
	}
});
