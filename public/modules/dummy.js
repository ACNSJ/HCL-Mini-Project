var str=`Which of the following is a biodiversity hotspot known for its unique and diverse ecosystem?

a) Sahara Desert
b) Thar Desert
c) Amazon Rainforest-Ans
d) Antarctica


What is the process by which plants convert carbon dioxide and sunlight into energy and oxygen?

a) Respiration
b) Photosynthesis-Ans
c) Combustion
d) Fermentation


Which of the following is a sustainable farming technique that conserves soil and water resources?

a) Monoculture
b) Organic farming-Ans
c) Deforestation
d) Pesticide use`


function QuestionCreate(str) 
{
    qa=str.split("\n\n\n")
    for(let i=0;i<qa.length;i++)
    {
        var l=qa[i].split("\n\n")
        for(let j=0;j<l[1].length;j++)
        {
            var a=l[1].split("\n")
            for(let k=0;k<a.length;k++)
            {
                var b=a[k]
                var o=a[k]
                var n=b.length
                if (b.endsWith("Ans"))
                {   console.log("Question:"+l[0]);
                    console.log("Answer:"+b.replace("-Ans",""));
                    
                    break;
                }
                
            }
            if(o.endsWith("Ans"))
            {   o=o.replace("-Ans","");
                    break;
            }
        }  
    }
}

module.exports = QuestionCreate;