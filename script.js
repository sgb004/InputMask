input.on('keyup', function(e){
		console.log( '-------' );
		console.log( this.selectionStart );
		console.log( this.selectionEnd );
		console.log( '-------' );
		//if( e.key.length === 1 ){
			var value = this.value.replace(/[^0-9a-zA-Z]/g,'');
			var mask = '(___) ___-(___)';
			var positions = {};
			//var value = 'ABCDEFGHIJKLM';
			var i, l, j, c;
			var k = 0;
			var thereEmpty = false;

			console.log( value.length );
			for( i=0; i<mask.length; i++ ){
				l = mask.substr(i, 1);
				if( l === '_' ){
					positions[i] = '_';
					k++;
				}
				console.log( mask.substr(i, 1) );
			}

			console.log( positions );
			i = 0;
			for( p in positions ){
				j = parseInt(p) + 1;
				if( value.length == i ){
					break;
				}
				if( positions[ p ] === '_' ){
					positions[ p ] = value.substr(i, 1);
				}
				console.log( j );
				mask = mask.substr(0, p)+positions[ p ]+mask.substr(j, mask.length);
				console.log( mask );
				i++;
			}
			if( value.length < k ){
				j--;
			}

			this.value = mask;
			this.selectionStart = j;
			this.selectionEnd = j;
		//}

	});
