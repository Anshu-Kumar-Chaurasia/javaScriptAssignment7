// Q1.

const person =
{
    naam:'Anshu',
    setter:function ()
    {
        return(`Hi name is ${this.naam}`)
    }
}
console.log(person.setter());

// Q2.

const student = 
{
    naam:'Anshu',
    rollNo:123,
    del:function () 
    {
        return `${this.naam} ${this.rollNo}`
    }
}
console.log(student.del());
delete student.rollNo;
console.log(student.del());

// Q3.

const per = 
{
    salary:100000,
    check:function ()
    {
        if(this.salary >= 500000)
        {
            return "Dream";
        }
        else
        {
            return "not Dream";
        }
    }
}
console.log(per.check());

// Q4.

const obj = 
{
    check: function ()
    {
        let count=0;
        for(let i in obj)
        {
            count++;
        }
        if(count==1)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
console.log(obj.check());

// Q5.

const obj1 = 
{
    fname:'Anshu'
}
const obj2 =
{
    lname:'Kumar'
}
const obj3 =
{
    merge:function ()
    {
        return `${obj1.fname} ${obj2.lname}`
    }
}
console.log(obj3.merge());

// Q6.

const ojbm =
{
    n1:2,
    n2:12,
    n3:149,
    n4:function ()
    {
        return `${this.n1*this.n2} ${this.n1*this.n3}`
    }
}
console.log(ojbm.n4());

// Q7.

const sum = 
{
    n1:1,
    n2:2,
    n3:3,
    sum:function()
    {
        return `${this.n1+this.n2+this.n3}`
    }
}
console.log(sum.sum());

// Q8.

const o1 =
{
    nam:"utkarsh",
    no:3
}
const o2 =
{
    nam:"Singh",
    no:2
}
const o3 =
{
    check:function()
    {
        if(o1.nam==o2.nam && o1.no==o2.no)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
console.log(o3.check())