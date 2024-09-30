function f(y,z){let my="00011011&0111&0110&0111&000111&0011&001011&0111&00011011&000111",mx="02&&012&012&1&012&012&0&012&012"

     
,i=0,ci=[],o=1           ,w=12             ,h=5,q=w+o*    2,t,e,d=new        Date(),             m=d.getHours(),b=d         .getMinutes(),u=d.          getSeconds(),mf=Math.      floor,n=[mf(m/10),    m%10,mf(b/10),b%10,         mf(u/10),u%10],l={h:(x,y)=>{
     for(               i=0;i<w;             i++)ci         [i+o+x*         q+q*6*(y            *4+o)]=         1},v:     (x,y,z)=>      {for(         i=0;i<         h;i++)           {e=(w-o          )*z+o          +q*x+(      i+y*      4+o)*q            *6;
     ci[e             ]=1;ci[e-z*2            +1]=1}}       },s=""        ,p="\x1b[";n.           forEach                 ((j,o)=>         {mx.         split(        "&")[j]           .split           (s).         forEach                  (y=>          
     l.h(o           ,+y));    t=my           .split("&")[j].split       (s);t.   forEach           ((_,k)=>+k%2          ==0?l                        .v(o,t[k],t[k+1]):0              )});y            =y?.replace(/\s/g,s                  );i=0; 
     while(        i<y?.length){if(ci          [i])s+=p+"38;5;27m"      +y[i]+p+"0m"; else        s            +=p+      "38;5;244m"                   +p+"2m"      +y[i]+              p+"0m"           ;i++;                                 if(i%        
q    ==0)s+=      " ";if         (i%(q          *2)==0)   [20,22,      26,28,         44,46,      50         ,52].         indexOf         (i/q        )>-1?s        +=`${p            }38;5;${          z?"27m"                             :`244m${ 
 p}2m`}## ${     p}0m`:s         +="   ";         if(i%(q*6)==        0)s+=           "\n";};      setTimeout(()=>         {console.clear ();f         (f+"f()         ",!z)           },1000);          console.                          log(s);};f()
