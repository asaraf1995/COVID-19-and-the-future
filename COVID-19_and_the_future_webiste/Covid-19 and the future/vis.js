mapEle=[]
function createMap(category, gender){
	d3.select( '#vis_1' ).selectAll('*').remove();
	for(var i=0;i<categoryVariableName.length;i++){
		if(gender=='male'){
			categoryVariableName[i]+="_men"
		}else if(gender=='female'){
			categoryVariableName[i]+="_women"
		}else if(gender=='other'){
			categoryVariableName[i]+="_other"
		}	
	}
	function parseRow(d){
		var focusVar="";
		if(category=="all"){
			focusVar=categoryVariableName[2];
		}
		else if(category=="productivity"){
			focusVar=categoryVariableName[0];
		}else{
			focusVar=categoryVariableName[1];
		}
		stateDataMap[d['_id.state']] = +d[focusVar];
		maxData = Math.max(Math.abs(+d[focusVar]), maxData);
		return { 'state': d['_id.state'],
			   'value': +d[focusVar],
		};
	}

	var gridmap = {};
	var stateDataMap = {};
	var maxData = 0.000001;

	d3.csv( 'map.csv',
		d => ({ code: d.code, x: +d.x, y: +d.y }),
		m => {
		  gridmap = d3.map( m, d => d.code );
		  d3.csv( 'overall_state.csv', parseRow, ready );
		}
	);


	function ready ( data ) {
		data = data.filter(d => gridmap.has( d.state ));

		var margin = { top: 10, right: 10, bottom: 10, left: 10 },
			html = document.documentElement,
			width = $("#Interestingfacts_container").width() - margin.left - margin.right,
			height = $("#Interestingfacts_container").height() - margin.top - margin.bottom,

		ry = d3.scale.ordinal()
			.domain( gridmap.values().map( d => d.y ).sort( d3.ascending ) )
			.rangeBands([ 0, height ], 0.07),
		rx = d3.scale.ordinal()
			.domain( gridmap.values().map( d => d.x ).sort( d3.ascending ) )
			.rangeBands([ 0, width ], 0.05),
		y = d3.scale.linear()
			.domain([ 0, d3.max( data, d => d["value"] ) ])
			.range([ ry.rangeBand(), 0 ])
		x = d3.scale.linear()
			.domain( [0, d3.max( data, d => d["value"] )] )
			.range([ 0, rx.rangeBand() ]);

		var countries = d3.nest()
			.key( d => d.state )
			.entries( data )
			.map( d => {
				var pos = gridmap.get( d.key );
				d.title = d.values[0].state;
				d.x = pos.x;
				d.y = pos.y;
				return d;
			})
			.filter( Boolean );

		var svg = d3.select( '#vis_1' ).append( 'svg' )
			.attr( 'width', width + margin.left + margin.right )
			.attr( 'height', height + margin.top + margin.bottom )
			.append( 'g' )
			.attr( 'transform', `translate(${[ margin.left, margin.top ]})` );

		var country = svg.selectAll( 'g' ).data( countries ).enter()
			.append( 'g' )
			.attr( 'transform', d => `translate(${[ rx( d.x ), ry( d.y ) ]})` )
			.on('click', function(d, i) {
				$(this).find("rect").first().attr("stroke","#21abcf")
				$(this).find("rect").first().attr("stroke-width","4")
				$(this).find("rect").first().attr("class","perimeter")
				
				if(stateVars[0]==""){
					stateVars[0]=d['key']
					mapEle[0]=this;
				}
				else if(stateVars[1]==""){
					stateVars[1]=stateVars[0]
					stateVars[0]=d['key']

					mapEle[1]=mapEle[0];
					mapEle[0]=this;
				}
				else{
					if(d['key']!=stateVars[1] && stateVars[0]!=stateVars[1]){
						$(mapEle[1]).find("rect").first().attr("stroke","none")
						$(mapEle[1]).find("rect").first().attr("stroke-width","0")
						$(mapEle[1]).find("rect").first().attr("class","")
					}
					stateVars[1]=stateVars[0];
					stateVars[0]=d['key']
					
					mapEle[1]=mapEle[0];
					mapEle[0]=this;
				}
				createTimeline(stateVars[0],stateVars[1],$("#gender").val(),$("#category").val(),0);
			});

		country.append( 'rect' )
			.attr( 'width', rx.rangeBand() )
			.attr( 'height', ry.rangeBand() )
			.style( 'fill', function(d) {
			  if (stateDataMap[d.key] > 0){
				  return '#91cf60'
			  }
			  return '#fc8d59'
			});

		country.append( 'rect' )
			.attr( 'width', rx.rangeBand() )
			.attr( 'height', function(d) {
				  var val = Math.abs(stateDataMap[d.key])
				  return ry.rangeBand() * (1 - val/maxData);
				}
			)
			.style( 'stroke', 'none' )
			.style( 'fill', '#d8d8d8' )
			

		country.append( 'text' )
			.attr( 'class', 'country' )
			.attr( 'x', 4 )
			.attr( 'y', 0 )
			.attr( 'dx', 0 )
			.attr( 'dy', '1em' )
			.style( 'fill', 'rgba(0,0,0,.75)' )
			.text( d => (d.title || d.key) + ' (' + stateDataMap[d.key] + ' % )');
			svg.append("circle").attr("cx",$("#Interestingfacts_container").width()*0.86).attr("cy",$("#Interestingfacts_container").height()*0.8).attr("r", 8).style("fill", "#91cf60")
			svg.append("circle").attr("cx",$("#Interestingfacts_container").width()*0.86).attr("cy",$("#Interestingfacts_container").height()*0.84).attr("r", 8).style("fill", "#fc8d59")
			svg.append("text").attr("x", $("#Interestingfacts_container").width()*0.87).attr("y", $("#Interestingfacts_container").height()*0.81).text("Increase").style("font-size", "12px").style("fill", "#fff")
			svg.append("text").attr("x", $("#Interestingfacts_container").width()*0.87).attr("y", $("#Interestingfacts_container").height()*0.85).text("Decrease").style("font-size", "12px").style("fill", "#fff")
	}
}
createMap("productivity","none");