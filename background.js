
 


$('document').ready(function(){

// $('#infoSection').append('<h3 style="margin:10px; color: white; " align="center" >Linker v1.1</h3><div class="save"><button class="btn btn-primary" style="width:80%; margin:2% 10%;" id="save" type="button">Save Opened Pages</button></div><div class="back" style="display: none;"><button class="btn btn-primary" style="width:80%; margin:2% 10%;" id="back" type="button">Done</button></div><div style="display: none;" class="create"><div><input class="btn btn-info" style="width:80%; margin:2% 10%; margin-bottom:5%; background-color: white; color:black;" placeholder="Enter Group Name" id="name" type="text"/><div> <div style="width:80%; margin:0% 10%; margin-bottom:5%; color: grey; display: none;" align="center" id="error" > </div></div></div><div align="center" style="margin-bottom:8%;" ><button class="btn btn-primary" style="width:35%; margin-right:4%; display: inline-block;" id="create" type="button">Save</button><button class="btn btn-danger" style="width:35%; margin-left:4%; display: inline-block;" id="cancel" type="button">Cancel</button></div></div><div class="open"><button class="btn btn-warning" style="width:80%; margin:2% 10%; " id="open" type="button">Open Saved Pages</button></div><div style="display: none;" class="selectgroup"><div><select class="btn btn-info" style="width:80%; margin:2% 10%; margin-bottom:5%; background-color: white; color:black;" id="selectgroup" type="select"> </select><div> <div style="width:80%; margin:0% 10%; margin-bottom:5%; color: grey; display: none;" align="center" id="select_error" > </div></div></div><div align="center" style="margin-bottom:8%;" ><button class="btn btn-primary" style="width:35%; margin-right:4%; display: inline-block;" id="openurl" type="button">Open</button><button class="btn btn-danger" style="width:35%; margin-left:4%; display: inline-block;" id="cancelurl" type="button">Cancel</button></div></div><div class="delete"><button class="btn btn-danger" style="width:80%; margin:2% 10% 5% 10%;" id="delete" type="button">Delete Saved Pages</button></div><div style="display: none;" class="deletegroup"><div><select class="btn btn-info" style="width:80%; margin:2% 10%; margin-bottom:5%; background-color: white; color:black;" id="select_delete_group" type="select"> </select><div> <div style="width:80%; margin:0% 10%; margin-bottom:5%; color: grey; display: none;" align="center" id="delete_error" > </div></div></div><div align="center" style="margin-bottom:8%;" ><button class="btn btn-primary" style="width:35%; margin-right:4%; display: inline-block;" id="deletegroup" type="button">Delete</button><button class="btn btn-danger" style="width:35%; margin-left:4%; display: inline-block;" id="deletecancel" type="button">Cancel</button></div></div>');
// $('#infoSection').append('<div style="margin:20px;" align="center"> <img src="logo.png" style="width:40px; height: 40px; display: inline-block;"/> <h3 style=" color: white; display: inline-block;" >Linker v1.1</h3></div><div class="save"><button class="btn btn-primary" style="width:80%; margin:2% 10%;" id="save" type="button">Save Opened Pages</button></div><div class="back" style="display: none;"><button class="btn btn-primary" style="width:80%; margin:2% 10%;" id="back" type="button">Done</button></div><div style="display: none;" class="create"><div><input class="btn btn-info" style="width:80%; margin:2% 10%; margin-bottom:5%; background-color: white; color:black;" placeholder="Enter Group Name" id="name" type="text"/><div> <div style="width:80%; margin:0% 10%; margin-bottom:5%; color: grey; display: none;" align="center" id="error" > </div></div></div><div align="center" style="margin-bottom:8%;" ><button class="btn btn-primary" style="width:35%; margin-right:4%; display: inline-block;" id="create" type="button">Save</button><button class="btn btn-danger" style="width:35%; margin-left:4%; display: inline-block;" id="cancel" type="button">Cancel</button></div></div><div class="open"><button class="btn btn-warning" style="width:80%; margin:2% 10%; " id="open" type="button">Open Saved Pages</button></div><div style="display: none;" class="selectgroup"><div><select class="btn btn-info" style="width:80%; margin:2% 10%; margin-bottom:5%; background-color: white; color:black;" id="selectgroup" type="select"> </select><div> <div style="width:80%; margin:0% 10%; margin-bottom:5%; color: grey; display: none;" align="center" id="select_error" > </div></div></div><div align="center" style="margin-bottom:8%;" ><button class="btn btn-primary" style="width:35%; margin-right:4%; display: inline-block;" id="openurl" type="button">Open</button><button class="btn btn-danger" style="width:35%; margin-left:4%; display: inline-block;" id="cancelurl" type="button">Cancel</button></div></div><div class="delete"><button class="btn btn-danger" style="width:80%; margin:2% 10% 10% 10%;" id="delete" type="button">Delete Saved Pages</button></div><div style="display: none;" class="deletegroup"><div><select class="btn btn-info" style="width:80%; margin:2% 10%; margin-bottom:5%; background-color: white; color:black;" id="select_delete_group" type="select"> </select><div> <div style="width:80%; margin:0% 10%; margin-bottom:5%; color: grey; display: none;" align="center" id="delete_error" > </div></div></div><div align="center" style="margin-bottom:8%;" ><button class="btn btn-primary" style="width:35%; margin-right:4%; display: inline-block;" id="deletegroup" type="button">Delete</button><button class="btn btn-danger" style="width:35%; margin-left:4%; display: inline-block;" id="deletecancel" type="button">Cancel</button></div></div>');

				var save_count=0;
				var open_count=0;

				var urls_string = '';
				var urls

				var found = false;

				var tab_opened = [];

				chrome.tabs.query({}, function(tabs) 
				{
					tab_opened = tabs;
					console.log(tabs);
				});


				var save_btn = document.getElementById("save");
				save_btn.addEventListener("click", save);

				var open_btn = document.getElementById("open");
				open_btn.addEventListener("click", open);

				var name;

				var create_btn = document.getElementById("create");
				create_btn.addEventListener("click", create);

				var cancel_btn = document.getElementById("cancel");
				cancel_btn.addEventListener("click", cancel);



				var back_btn = document.getElementById("back");
				back_btn.addEventListener("click", back);


				var openurl_btn = document.getElementById("openurl");
				openurl_btn.addEventListener("click", openurl);


				var cancelurl_btn = document.getElementById("cancelurl");
				cancelurl_btn.addEventListener("click", cancelurl);



				var delete_btn = document.getElementById("delete");
				delete_btn.addEventListener("click", deletex);


				var deletecancel_btn = document.getElementById("deletecancel");
				deletecancel_btn.addEventListener("click", deletecancel);

				var deletegroup_btn = document.getElementById("deletegroup");
				deletegroup_btn.addEventListener("click", deletegroup);

				var deletecancel_btn = document.getElementById("deletecancel");
				deletecancel_btn.addEventListener("click", deletecancel);



				function save() 
				{

					$(".save").hide();
					$(".open").hide();
					$(".delete").hide();
					$('.create').show();

				}

				function create() 
				{
					$('#error').empty().hide();
					name = document.getElementById("name").value;
					if(name.length==0){  $('#error').append("Please Enter Group Name").show(); }
					else if(name.length>35){   $('#error').append("Group Name Length Should Not Exceed 30 Characters").show(); }
					else
					{
						// $(".save").show();
						// $(".open").show();
						// $('.create').hide();

						$("#create").text("Wait ...");
						document.getElementById("create").disabled = true;
						$("#cancel").hide();

						add(name);

					}

				}

				function add(name) 
				{

					    chrome.tabs.query({}, function(tabs) 
					    {
						    for (var i=0; i < tabs.length; i++) 
						    {
						    	if( ! tabs[i].url.toString().includes('chrome://') )
						    	{
						    		 urls_string += '[]'+tabs[i].url;
						    	}
						    }
						});
						
					    setTimeout( function() {  localStorage.removeItem(name);  } , 1000 );     // remove savedurls 
						setTimeout( function() {  localStorage.setItem(name.replace(" ","_")+"[$$$]", urls_string );  } , 1000 );



						$("#create").text("Save");
						document.getElementById("create").disabled = false;
						$("#cancel").show();

						document.getElementById("name").value = "";

						$(".create").hide();

						$(".back").show();  // Done

				}
				 

				function back() 
				{

					$('#error').empty().hide();
					$('#select_error').empty().hide();
					$('#delete_error').empty().hide();
					document.getElementById("name").value = "";
					
					$('.create').hide();
				    $('.selectgroup').hide();
				    $('.delete').hide();

					$(".back").hide();

					$(".save").show();
					$(".open").show();
					$(".delete").show();

					$("#back").text("Done");

				}



				function cancel() 
				{

					$('#error').empty().hide();
					document.getElementById("name").value = "";

					$('.create').hide();
					$(".back").hide();

					$(".save").show();
					$(".open").show();
					$(".delete").show();
				}


				function open() 
				{

					$(".save").hide();
					$(".open").hide();
					$(".delete").hide();
					$('.selectgroup').show();


					$("#selectgroup").empty();
					$("#selectgroup").append('<option selected>Select Group Name</option>');

					for (var i = 0; i < localStorage.length; i++)
						{
							if( localStorage.key(i).toString().includes('[$$$]') )
							{
							    var key = localStorage.key(i).toString();
							    k = key.replace('[$$$]','');
							    $("#selectgroup").append( '<option value='+key+'>'+k+'</option>' );
							}
						}

				}











				function openurl() 
				{
					$('#select_error').empty().hide();

					if( $('#selectgroup option:selected').val() === "Select Group Name" ){  $('#select_error').append("Please Select Group Name").show(); }
					else
					{
						$("#openurl").text("Wait ...");
						document.getElementById("openurl").disabled = true;
						$("#cancelurl").hide();

						open_this_group_urls($('#selectgroup option:selected').val());

					}

				}

				function open_this_group_urls(groupname) 
				{
						
						urls = localStorage.getItem(groupname).split('[]');   // gives first 0 index null
						urls.map( (url_to_open) => {
	
							if(url_to_open!=="")  // gives first 0 index null
							{
								if ( findurl(url_to_open) === 1 ){ console.log("yes for "+url_to_open); }
								else{
									console.log("no for "+url_to_open);
									chrome.tabs.create({ url: url_to_open , active: true });
									// setTimeout( function(){ chrome.tabs.create({url: url_to_open , active: true})   }, 0 );  
								}
							}

						} );

						$("#openurl").text("Open");
						document.getElementById("openurl").disabled = false;
						$("#cancelurl").show();
						$(".selectgroup").hide();

						$(".back").show();  // Done

						$("#back").text("All URL's Are Opened");

				}


				function cancelurl() 
				{

					//selected option clear appended
					$('#select_error').empty().hide();

					$('.selectgroup').hide();
					$(".back").hide();

					$(".save").show();
					$(".open").show();
					$(".delete").show();
				}






				function findurl(current_stored_url) 
				{
				    found = false ;

					for (var i=0; i < tab_opened.length; i++) 
				    {
				        if ( current_stored_url.toString().includes( tab_opened[i].url.toString() )  ) 
				        {
				            found =  true;
							break;
				        }

				    }

				    if(found===true){return 1;}
				}







				function deletex() 
				{

					$(".save").hide();
					$(".open").hide();
					$(".delete").hide();
					$('.deletegroup').show();

					$("#select_delete_group").empty();
					$("#select_delete_group").append('<option selected>Select Group Name</option>');

					for (var i = 0; i < localStorage.length; i++)
						{
							if( localStorage.key(i).toString().includes('[$$$]') )
							{
							    var key = localStorage.key(i).toString();
							    k = key.replace('[$$$]','');
							    $("#select_delete_group").append( '<option value='+key+'>'+k+'</option>' );
							}
						}

				}


				function deletegroup() 
				{
					$('#delete_error').empty().hide();

					if( $('#select_delete_group option:selected').val() === "Select Group Name" ){  $('#delete_error').append("Please Select Group Name").show(); }
					else
					{
						$("#deletegroup").text("Wait ...");
						document.getElementById("deletegroup").disabled = true;
						$("#deletecancel").hide();

						delete_this_group($('#select_delete_group option:selected').val());

					}

				}

				function delete_this_group(groupname) 
				{

						localStorage.removeItem(groupname);


						$("#deletegroup").text("Delete");
						document.getElementById("deletegroup").disabled = false;
						$("#deletecancel").show();
						$(".deletegroup").hide();
						$(".back").show();  // Done

				}


				function deletecancel() 
				{

					$('#delete_error').empty().hide();

					$('.deletegroup').hide();
					$(".back").hide();

					$(".save").show();
					$(".open").show();
					$(".delete").show();

				}


});
