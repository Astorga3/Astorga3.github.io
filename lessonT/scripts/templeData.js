fetch('jason/temple.json')
        .then((response) => response.json())
        .then((templeObject) => {
            templeList = templeObject.templesList;
            // console.log(templeList);
            
            getTempleData(A, "barranquilla-colombia");
            getTempleData(B, "laie-hawaii");
            getTempleData(C, "logan-utah");
            getTempleData(D, "rome-italy");

            
            function getTempleData(i, templeName){

                const addressArr = templeList[i].address.split(", ");
                let address = "";
                for (a = 0; a < addressArr.length; a++){
                    address += "<p>"+ addressArr[a] +"</p>";
                }
                const ordinancesObject= templeList[i].schedule.ordinance;
                document.querySelector("." + templeName + "-address").innerHTML = address;
                document.querySelector("." + templeName + "-phone").innerHTML = phoneLink;
                document.querySelector("." + templeName + "-service").innerHTML = service;
                document.querySelector("." + templeName + "-baptism").innerHTML = baptism;
                document.querySelector("." + templeName + "-endownment").innerHTML = endownment;
                document.querySelector("." + templeName + "-sealing").innerHTML = sealing;
                document.querySelector("." + templeName + "-closure").innerHTML = templeClosure;
            }
                
        });
templeData();