var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
states={
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
}
var categories= ["Productivity","Employment"]
var categoryVariableName=[]
function isZero(a){
	if(a==0){
		return 2;
	}
	return a;
}
function createTimeline(s1,s2,category,gender,overall){
	$("#timeline").html("")
	categoryVariableName[1]="employment"
	categoryVariableName[0]="prod";
	if(gender=='male'){
		categoryVariableName[1]+="_men"
		categoryVariableName[0]+="_men";
	}else if(gender=='female'){
		categoryVariableName[1]+="_women"
		categoryVariableName[0]+="_women";
	}else if(gender=='other'){
		categoryVariableName[1]+="_other"
		categoryVariableName[0]+="_other";
	}
	if(overall==1){
		d3.csv("overall_month.csv", function(csv) {
			for(i=1;i<13;i++){
				plotData=[];
				colorData=[];
				monthData=csv.filter(function(row) {
					return row['_id.month'] == i;
				});
				if(monthData.length>0){
					if(category=='all'){
						for(var x=0;x<categories.length;x++){
							plotData.push({"column":categories[x],"data":isZero(Math.abs(monthData[0][categoryVariableName[x]]))});
							colorData.push({"column":categories[x],"data":monthData[0][categoryVariableName[x]]});
						}
					}else if (category=='productivity'){
						plotData.push({"column":categories[0],"data":isZero(Math.abs(monthData[0][categoryVariableName[0]]))});
						colorData.push({"column":categories[0],"data":monthData[0][categoryVariableName[0]]});
					}else{
						plotData.push({"column":categories[1],"data":isZero(Math.abs(monthData[0][categoryVariableName[1]]))});
						colorData.push({"column":categories[1],"data":monthData[0][categoryVariableName[1]]});
					}
				}
				if(i%2==0 && i > 3 && i <11){
					$("#timeline").append(`
					<div class="row align-items-center lines">
					  <div class="col-2 text-center bottom">
						<div class="circle"><p>`+month[i-1]+`</p></div>
					  </div>
					  <div class="col-8">
						<svg id="chart`+i+`" class='chartt'></svg>
					  </div>
					</div>
					<div class="row timeline">
					  <div class="col-2">
						<div class="corner top-right"></div>
					  </div>
					  <div class="col-8">
						<hr/>
					  </div>
					  <div class="col-2">
						<div class="corner left-bottom"></div>
					  </div>
					</div>`);	
					chart(plotData,colorData,i,1,s1,s2);
				}
				else if (i > 3 && i < 11){
							
					$("#timeline").append(`
					<div class="row align-items-center justify-content-end lines">
					  <div class="col-8 text-right">
						<svg id="chart`+i+`" class='chartt'></svg>
					  </div>
					  <div class="col-2 text-center full">
						<div class="circle"><p>`+month[i-1]+`</p></div>
					  </div>
					</div>
					<div class="row timeline">
					  <div class="col-2">
						<div class="corner right-bottom"></div>
					  </div>
					  <div class="col-8">
						<hr/>
					  </div>
					  <div class="col-2">
						<div class="corner top-left"></div>
					  </div>
					</div>`);
					chart(plotData,colorData,i,1,s1,s2);
				}
			}
		});
	}
	else{
		d3.csv("overall_month_state.csv", function(csv) {
			csv1 = csv.filter(function(row) {
				return row['_id.state'] == s1;
			});
			
			csv2 = csv.filter(function(row) {
				return row['_id.state'] == s2;
			});
			for(i=1;i<13;i++){
				plotData=[];
				colorData=[];
				monthData1=csv1.filter(function(row) {
					return row['_id.month'] == i;
				});
				
				monthData2=csv2.filter(function(row) {
					return row['_id.month'] == i;
				});
				if(monthData1.length>0 && monthData2.length==0){
					if(category=='all'){
						for(var x=0;x<categories.length;x++){
							plotData.push({"column":categories[x],"data":isZero(Math.abs(monthData1[0][categoryVariableName[x]]))});
							colorData.push({"column":categories[x],"data":monthData1[0][categoryVariableName[x]]});
						}
					}else if (category=='productivity'){
						plotData.push({"column":categories[0],"data":isZero(Math.abs(monthData1[0][categoryVariableName[0]]))});
						colorData.push({"column":categories[0],"data":monthData1[0][categoryVariableName[0]]});
					}else{
						plotData.push({"column":categories[1],"data":isZero(Math.abs(monthData1[0][categoryVariableName[1]]))});
						colorData.push({"column":categories[1],"data":monthData1[0][categoryVariableName[1]]});
					}
				}
				else if(monthData1.length>0 && monthData2.length>0){
					if(category=='all'){
						for(var x=0;x<categories.length;x++){
							plotData.push({"column":categories[x],"data":isZero(Math.abs(monthData1[0][categoryVariableName[x]])),"data1":-(isZero(Math.abs(monthData2[0][categoryVariableName[x]])))});
							colorData.push({"column":categories[x],"data":monthData1[0][categoryVariableName[x]],"data1":monthData2[0][categoryVariableName[x]]});
						}
					}else if (category=='productivity'){
						plotData.push({"column":categories[0],"data":isZero(Math.abs(monthData1[0][categoryVariableName[0]])),"data1":-(isZero(Math.abs(monthData2[0][categoryVariableName[0]])))});
						colorData.push({"column":categories[0],"data":monthData1[0][categoryVariableName[0]],"data1":monthData2[0][categoryVariableName[0]]});
					}else{
						plotData.push({"column":categories[1],"data":isZero(Math.abs(monthData1[0][categoryVariableName[1]])),"data1":-(isZero(Math.abs(monthData2[0][categoryVariableName[1]])))});
						colorData.push({"column":categories[1],"data":monthData1[0][categoryVariableName[1]],"data1":monthData2[0][categoryVariableName[1]]});
					}
				}
				if(i%2==0 && i > 3 && i <11){
					$("#timeline").append(`
					<div class="row align-items-center lines">
					  <div class="col-2 text-center bottom">
						<div class="circle"><p>`+month[i-1]+`</p></div>
					  </div>
					  <div class="col-8">
						<svg id="chart`+i+`" class='chartt'></svg>
					  </div>
					</div>
					<div class="row timeline">
					  <div class="col-2">
						<div class="corner top-right"></div>
					  </div>
					  <div class="col-8">
						<hr/>
					  </div>
					  <div class="col-2">
						<div class="corner left-bottom"></div>
					  </div>
					</div>`);	
					chart(plotData,colorData,i,1,s1,s2);
				}
				else if (i > 3 && i < 11){
							
					$("#timeline").append(`
					<div class="row align-items-center justify-content-end lines">
					  <div class="col-8 text-right">
						<svg id="chart`+i+`" class='chartt'></svg>
					  </div>
					  <div class="col-2 text-center full">
						<div class="circle"><p>`+month[i-1]+`</p></div>
					  </div>
					</div>
					<div class="row timeline">
					  <div class="col-2">
						<div class="corner right-bottom"></div>
					  </div>
					  <div class="col-8">
						<hr/>
					  </div>
					  <div class="col-2">
						<div class="corner top-left"></div>
					  </div>
					</div>`);
					chart(plotData,colorData,i,1,s1,s2);
				}
			}
		});
	}						
}


function chart(data,color,ele,speed,s1,s2) {

	var keys = Object.keys(data[0]).slice(1),
		copy = [].concat(keys);

	var svg = d3.select("#chart"+ele),
		width = $(".chartt").width(),
		height = $(".chartt").height();

	var y = d3.scaleBand()
		.rangeRound([0, height])
		.padding(0.1);

	var x = d3.scaleLinear()
		.rangeRound([width, 0]);

	keys.sort((a, b) => copy.indexOf(a) - copy.indexOf(b))
	
	var div = d3.select("#timeline").append("div")	
    .attr("class", "tooltip")				
    .style("opacity", 0);
	
	var series = d3.stack()
		.keys(keys)
		.offset(d3.stackOffsetDiverging)(data);

	y.domain(data.map(d => d.column));

	x.domain([
		d3.min(series, stackMin), 
		d3.max(series, stackMax)
	]).nice();

	var barGroups = svg.selectAll("g.layer")
		.data(series, d => d.key);

	barGroups.exit().remove();

	barGroups.enter().insert("g")
		.classed('layer', true);

	var bars = svg.selectAll("g.layer").selectAll(".bars")
		.data(d => d, d => d.data.column);

	bars.exit().remove();

	bars.enter().append("rect")
		.attr("class", "bars")
		.attr("height", y.bandwidth())
		.attr("y", d => y(d.data.column))
		.attr("x", d => x(d[1]))
		.on("mouseover", function(d) {
			dd=0;
			if(d['0']==0){
				dd=color.filter(function(row) {
					return row['column'] == d.data.column;
				})[0]['data']
			}
			else{
				dd=color.filter(function(row) {
					return row['column'] == d.data.column;
				})[0]['data1']
			}
			txt=`<div class='row'>
			<div class='col-12 tooltiptxt'>`+(d['0']==0?states[s1]:states[s2])+`</div></div><div class='row'>
			<div class='col-12 tooltiptxt'>`+(dd>0?("An increase of "+dd+"%"):(dd==0?"No change":"A decrease of "+Math.abs(dd)+"%"))+`</div>
			</div>`
			d3.select(this).style('opacity',1);
			div.transition()		
                .duration(100)		
                .style("opacity", 0.9);		
            div.html(txt)	
                .style("left", (d3.event.pageX*.2) + "px")		
                .style("top", (d3.event.pageY-20) + "px");	
            })					
        .on("mouseout", function(d) {
			d3.select(this).style('opacity',0.7);
            div.transition()		
                .duration(500)		
                .style("opacity", 0);	
        })
		.merge(bars)
	.transition().duration(speed)
		.attr("width", d => Math.abs(x(d[0])) - x(d[1]))
		

	var yAxis = svg.append("g")
	.attr("class", "y-axis").transition().duration(speed).attr("transform", "translate(" + (($("#chart"+ele).width()/2)+($("#chart"+ele).width()/10)) + ",0)").call(d3.axisLeft(y));
	
	for( var x=0;x<color.length;x++){
		$("#chart"+ele+" g:nth-child(1) rect:nth-child("+(x+1)+")").css('fill',color[x]['data']>0?'#21abcf':'orange');
		$("#chart"+ele+" g:nth-child(2) rect:nth-child("+(x+1)+")").css('fill',color[x]['data1']>0?'blue':'red');

	}
}

function stackMin(serie) {
	return d3.min(serie, function(d) { return d[0]; });
}

function stackMax(serie) {
	return d3.max(serie, function(d) { return d[1]; });
}

createTimeline('NJ','IL','all','none',0);