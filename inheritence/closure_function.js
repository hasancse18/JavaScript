console.log("hello ")


function outer()
{
    let count =0;
    function inner()
    {
        count++;
        //console.log(count);
    }
    function getCount()
    {
        return count;
    }
    return{inner,getCount};
}

const result = outer();
result.inner();
result.inner();
result.inner();
console.log(result.getCount());