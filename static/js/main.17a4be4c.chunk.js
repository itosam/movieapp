(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(e,t,a){e.exports=a(76)},59:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),o=a.n(r),i=a(23),c=(a(59),a(61),a(6)),m=a(81),s=a(83),u=a(68),p=a(79),d=a(69),h=a(80);var E=function(){return l.a.createElement("header",null,l.a.createElement(m.a,{bg:"dark",fixed:"top",className:"justify-content-center",style:{height:"50px"}},l.a.createElement("div",{className:"navigation"},l.a.createElement(s.a,null,l.a.createElement(u.a,null,l.a.createElement(p.a,null,l.a.createElement(d.a,null,l.a.createElement(h.a,{pill:!0,bg:"light",style:{padding:"10px 20px"}},l.a.createElement(s.a.Item,null,l.a.createElement(i.b,{to:"/movieapp",style:{textDecoration:"none"}},"Home")))),l.a.createElement(d.a,null,l.a.createElement(h.a,{pill:!0,bg:"light",style:{padding:"10px 20px"}},l.a.createElement(s.a.Item,null,l.a.createElement(i.c,{className:"button",exact:!0,to:"/movies",style:{textDecoration:"none"}},"Movies")))),l.a.createElement(d.a,null,l.a.createElement(h.a,{pill:!0,bg:"light",style:{padding:"10px 20px"}},l.a.createElement(s.a.Item,null,l.a.createElement(i.c,{className:"button",to:"/movies/new",style:{textDecoration:"none"}},"Add Movie")))),l.a.createElement(d.a,null,l.a.createElement(h.a,{pill:!0,bg:"light",style:{padding:"10px 20px"}},l.a.createElement(s.a.Item,null,l.a.createElement(i.c,{className:"button",to:"/about",style:{textDecoration:"none"}},"About"))))))))))},g=a(7),v=a(17),f=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!0),c=Object(g.a)(o,2),m=c[0],s=c[1];return Object(n.useEffect)(function(){fetch("https://movie-json-server.onrender.com/movies?_sort=release_date&_order=desc&_limit=3").then(function(e){return e.json()}).then(function(e){r(e),s(!1)})},[]),l.a.createElement(u.a,{className:"bg-light text-center",style:{border:"#4444 2px solid",padding:"2%",marginBottom:"2rem",marginTop:"05%",borderRadius:"30px"}},l.a.createElement("h3",{className:"movie-box-heading"},l.a.createElement("strong",null,"Recent Releases:")),m&&l.a.createElement("p",null,"Loading...Please Wait"),!m,a.map(function(e){return l.a.createElement("img",{className:"home-poster",src:e.poster_path,style:{width:"33%"}})}),l.a.createElement(i.b,{to:"/movies"},l.a.createElement(v.a,{variant:"outline-dark",size:"md",style:{border:"solid 2px",margin:"1rem"}},"Check out all Movies")))},b=a(77),y=a(84);var x=function(){return l.a.createElement("section",{className:"about"},l.a.createElement(p.a,{className:"my-5 mx-5 "},l.a.createElement(b.a,{className:"bg-light jumbotron",style:{padding:"2rem 1rem",marginBottom:"2rem",marginTop:"2rem",borderRadius:"30px"}},l.a.createElement(b.a.Body,null,l.a.createElement("h1",null,"Created by Geng | Sam | Zach"),l.a.createElement("h3",null,"This application is a mini movie data base, that will allow users to search for movies, look at movie details, and add new movies. This application features:"," ")))),l.a.createElement(y.a,null,l.a.createElement(y.a.Item,null,l.a.createElement("img",{style:{borderRadius:"30px"},width:1200,height:500,alt:"900x500",src:"https://www.gannett-cdn.com/-mm-/9acbd390157cc5ea4805849aabf1c1d84141cdfb/c=0-0-660-371/local/-/media/2020/11/02/Taunton/ghows-WL-200719091-2b4c9a26.jpg?width=1200&disable=upscale&format=pjpg&auto=webp"}),l.a.createElement(y.a.Caption,{style:{color:"#fff",position:"absolute",left:"900px",top:"80px"}},l.a.createElement("h3",null,"Multiple examples of inverse data flow "))),l.a.createElement(y.a.Item,{clasName:"border"},l.a.createElement("img",{style:{borderRadius:"30px"},width:1200,height:500,alt:"900x500",src:"https://previews.123rf.com/images/jomkwan7/jomkwan72002/jomkwan7200200621/140173805-happy-dog-pug-breed-smile-with-funny-face-lying-on-green-grass-in-garden-purebred-pug-dog-healthy-co.jpg"}),l.a.createElement(y.a.Caption,{style:{color:"#fff",position:"absolute",right:"900px",top:"80px"}},l.a.createElement("h3",null,"Client Side routing with React Router"))),l.a.createElement(y.a.Item,null,l.a.createElement("img",{style:{borderRadius:"30px"},width:1200,height:500,alt:"900x500",src:"https://iso.500px.com/wp-content/uploads/2016/02/stock-photo-125037925-1500x1000.jpg"}),l.a.createElement(y.a.Caption,{style:{color:"#fff",position:"absolute",left:"900px",top:"100x"}},l.a.createElement("h3",null,"Searching via a combination of useState and useEffect"))),l.a.createElement(y.a.Item,null,l.a.createElement("img",{style:{borderRadius:"30px"},width:1200,height:500,alt:"900x500",src:"https://media.istockphoto.com/photos/cute-happy-french-bulldog-dog-dressed-up-as-musician-wearing-a-funny-picture-id1176834578"}),l.a.createElement(y.a.Caption,{style:{color:"#fff",position:"absolute",right:"900px",top:"80x"}},l.a.createElement("h3",null,"Data fetching via JSON server to a db.json file")))))},w=a(45);var j=function(e){var t=e.id,a=e.title,n=e.year,r=e.poster,o=e.plot,i=e.rating,c=e.favorite,m=e.onFavoriteMovies;return l.a.createElement(b.a,{className:"card",style:{width:"20rem"}},l.a.createElement(b.a.Img,{variant:"top",src:r,alt:a,style:{width:"100%"}}),l.a.createElement(b.a.Body,{style:{textAlign:"left"}},l.a.createElement(b.a.Title,null,l.a.createElement("strong",null,a)),l.a.createElement(b.a.Text,null,l.a.createElement("p",null,l.a.createElement("strong",null,"Release date"),": ",n),l.a.createElement("p",null,l.a.createElement("strong",null,"Plot"),": ",o),l.a.createElement("p",null,l.a.createElement("strong",null,"Rating"),":",i)),l.a.createElement(v.a,{variant:"primary",onClick:function(){fetch("https://movie-json-server.onrender.com/movies/".concat(t),{method:"PATCH",headers:{"Content-type":"application/json"},body:JSON.stringify({favorite:!c})}).then(function(e){return e.json()}).then(m)}},c?"remove Favorite":"add to Favorites")))};var C=function(e){var t=e.movies,a=e.favorites,n=e.searchQuery,r=e.setSearchQuery,o=e.onFavoriteMovies,i=e.onFavoritesClick,c=e.isLoading,m=(e.setIsLoading,t.map(function(e){return l.a.createElement(j,{key:e.id,id:e.id,title:e.title,year:e.release_date,poster:e.poster_path,plot:e.overview,rating:e.vote_average,favorite:e.favorite,onFavoriteMovies:o})}));return l.a.createElement(u.a,{className:"bg-light text-center",style:{marginTop:"100px"}},l.a.createElement("h2",null,"Movies"),l.a.createElement("input",{style:{borderRadius:"5px",width:"20em",border:"#3333 2px solid",padding:"8px",margin:"10px"},type:"text",placeholder:"Search...",onChange:function(e){return r(e.target.value)},value:n}),l.a.createElement("button",{variant:"dark",style:{backgroundColor:"black",color:"white",borderRadius:"5px",padding:"8px"},onClick:i},a?"Show All":"Show Favorites"),c&&l.a.createElement("p",null,"Loading...Please Wait"),!c,l.a.createElement("div",{className:"grid text-left"},m))},O=a(8),S=a(2),N=a(82),_={title:"",release_date:"",poster_path:"",overview:"",vote_average:""};var k=function(e){var t=e.onAddMovie,a=Object(n.useState)(_),r=Object(g.a)(a,2),o=r[0],i=r[1],m=Object(c.f)(),s=function(e){var t=e.target,a=t.name,n=t.value;i(function(e){return Object(S.a)({},e,Object(O.a)({},a,n))})};return l.a.createElement(u.a,{style:{padding:"20%, 20%",marginBottom:"2rem",marginTop:"10%"}},l.a.createElement(N.a,{className:"form border rounded  ",autoComplete:"off",onSubmit:function(e){e.preventDefault();var a={title:o.title,release_date:o.release_date,poster_path:o.poster,overview:o.plot,vote_average:o.rating};fetch("https://movie-json-server.onrender.com/movies",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(e){return e.json()}).then(function(e){t(e),m.push("/movies")})}},l.a.createElement(N.a.Group,{className:"my-3 mx-3"},l.a.createElement("h3",null,"Add A New Movie"),l.a.createElement(p.a,null,l.a.createElement(d.a,null,l.a.createElement(N.a.Label,{htmlFor:"title"},"Movie Title"),l.a.createElement(N.a.Control,{type:"text",id:"title",name:"title",placeholder:"Movie Title",onChange:s,value:o.title})),l.a.createElement(d.a,null,l.a.createElement(N.a.Label,{htmlFor:"release_date"},"Releast Date"),l.a.createElement(N.a.Control,{className:"",type:"date",id:"release_date",name:"release_date",placeholder:"Release date or year",onChange:s,value:o.release_date}))),l.a.createElement(p.a,null,l.a.createElement(d.a,null,l.a.createElement(N.a.Label,{htmlFor:"poster"},"Poster/Image"),l.a.createElement(N.a.Control,{type:"text",id:"poster",name:"poster",placeholder:"Poster/Movie Image",onChange:s,value:o.poster})),l.a.createElement(d.a,null,l.a.createElement(N.a.Label,{htmlFor:"rating"},"Rating"),l.a.createElement(N.a.Control,{type:"number",id:"rating",name:"rating",step:"0.1",placeholder:"Rating",onChange:s,value:o.rating}))),"\u200b",l.a.createElement(N.a.Label,{htmlFor:"plot"},"Plot Summary"),l.a.createElement(N.a.Control,{className:"my-3",as:"textarea",rows:3,id:"plot",name:"plot",placeholder:"Plot Summary",onChange:s,value:o.plot}),l.a.createElement(v.a,{type:"submit",class:"my-3"},"Add Movie"))))};var R=function(){var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),i=Object(g.a)(o,2),m=i[0],s=i[1],p=Object(n.useState)(!1),d=Object(g.a)(p,2),h=d[0],E=d[1],v=Object(n.useState)(!0),f=Object(g.a)(v,2),b=f[0],y=f[1];Object(n.useEffect)(function(){fetch("https://movie-json-server.onrender.com/movies?_sort=release_date&_order=desc").then(function(e){return e.json()}).then(function(e){console.log("movie container loaded"),r(e),y(!1)})},[]);var x=a;return h&&(x=x.filter(function(e){return e.favorite})),m&&(x=x.filter(function(e){return e.title.toLowerCase().includes(m.toLowerCase())})),l.a.createElement(u.a,null,l.a.createElement(c.c,null,l.a.createElement(c.a,{exact:!0,path:["/movies"]},l.a.createElement(C,{movies:x,searchQuery:m,favorites:h,setSearchQuery:s,onFavoritesClick:function(){E(function(e){return!e})},onFavoriteMovies:function(e){var t=a.map(function(t){return t.id===e.id?e:t});r(t)},isLoading:b,setIsLoading:y})),l.a.createElement(c.a,{path:"/movies/new"},l.a.createElement(k,{onAddMovie:function(e){r([].concat(Object(w.a)(a),[e]))}}))))},M=function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(c.c,null,l.a.createElement(c.a,{exact:!0,path:"/movieapp"},l.a.createElement(f,null)),l.a.createElement(c.a,{path:"/about"},l.a.createElement(x,null)),l.a.createElement(c.a,{path:"/movies"},l.a.createElement(R,null))))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i.a,null,l.a.createElement(M,null))),document.getElementById("root"))}},[[51,2,1]]]);
//# sourceMappingURL=main.17a4be4c.chunk.js.map