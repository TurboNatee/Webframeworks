/* GET home page */
const index = function(req, res){ 
    res.render('index', { title: 'Express' }); 
    };
const about = function(req, res){ 
    res.render('index', { title: 'About' }); 
    };
    const names = function(req, res){ 
        res.render('index', { title: 'Nathan Swan-Pole' }); 
        };
		const beans = function(req, res){ 
        res.render('index', { title: 'Nathan Swan-Pole' }); 
        };
	
    module.exports = { 
    index,
    about,
    names
    };
    