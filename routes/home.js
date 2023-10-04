const express = require('express')
const router = express.Router()
const user = require('../models/usermodel')
const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    subject:String,
    question:String,
    option:[String],
    answer:String,
    code:String
})

const Question = mongoose.model('Question',questionSchema)
// All 
router.get('/home',(req,res)=>{        
    if (req.query.name ==null){
        req.query.name=l
    } 
    else{
        l=req.query.name
    }
    res.render('homepage/index',{
        name:req.query.name
    })
})
router.get('/quizattendance',async(req,res)=>{
    code=await Question.find({code:req.query.code})
    if(req.query.code==null){
        res.render('homepage/Quizattendance',{
            errorMessage:''
        })
    }
    else if(code==false){
        res.render('homepage/Quizattendance',{
            errorMessage:'No quiz available'
        })
    }
    else{
        console.log(req.query.code);
        c=code[code.length-1]
        op=c['option']
        res.render('homepage/Quiz',{
            question:c['question'],
            op1: op[0],
            op2: op[1],
            op3: op[2],
            op4: op[3],
            code:req.query.code,
            length:code.length,ans:c['answer'],
            ca:0,ano:0
        })

    }
})
router.post('/quiz',async(req,res)=>{
    
    var z=req.body.ans
    z=JSON.stringify(z)
    z=z.slice(1,2)
    z=z.toString().toLowerCase()
    console.log(z);
    no=req.body.ano
    no=parseInt(no)
    if(req.body.ca.toLowerCase()==z)
    {
        no=no+1
    }
    console.log(no);
    l=req.body.code
    l=l.toString()
    l=l.replace(' ','')
    code=await Question.find({code:l})
    if(req.body.len==0){
        res.render('homepage/QuizCompleted',{
            ca:no,
            l:code.length
        }) 
    }
    else{
    code=await Question.find({code:l})
    a=req.body.len
    b=req.body.op4
    a=parseInt(a)
    
    c=code[a-1]
    console.log(a);
    op=c['option']
    res.render('homepage/Quiz',{
            question:c['question'],
            op1: op[0],
            op2: op[1],
            op3: op[2],
            op4: op[3],
            code:req.body.code,
            length:a-1,ans:c['answer'],
            ca:'',
            ano:no
        })
    }}
)

router.get('/quizcreate',(req,res)=>{
    res.render('homepage/QuizCreate')
})

router.get('/logout',(req,res)=>{
    res.redirect('/portal/login')
})

router.post('/home',async(req,res)=>{
    var l=req.body.question
    y=JSON.stringify(l)
    y=JSON.parse(y)
    r=y.split('\n\r');
    l=Question.find({code:req.body.code})
    if(l==true)
    {
        res.render('homepage/QuizCreate',{
            errorMessage:"Code Already Exists",
        })
    }
    for(let i=0;i<r.length;i++){
            u=r[i]
            z=u.split('\r\n')
            //console.log(z);
            for(let j=0;j<z.length;j++){
                if (z[j].endsWith('-Ans'))
                {
                    z[j]=z[j].replace("-Ans","")
                    var ans=z[j];
                }
            }
            //console.log(z[0]);
            //console.log(z[1]+z[2]+z[3]+z[4]);
            //console.log(ans);
            const set =new Question({subject:req.body.subject,question:z[0],option:[z[1],z[2],z[3],z[4]],answer:ans,code:req.body.code})
            const newset=await set.save()
    }
    res.redirect('/home')
})

router.post('/home/quizcompleted',(req,res)=>{
    res.download()
})



module.exports = router 

