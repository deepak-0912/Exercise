Query 1:Find the Pincode with highest average sale price.


answer:with temprarytable(pincode,highest_avg) as (select postcode,avg(price) as price from land_registry_price_paid_uk
group by postcode order by price desc)
select pincode from temprarytable limit 1;

result:
 pincode 
---------
 W8 5JN
(1 row)
Time: 322.524 ms

second answer

 
select postcode as pincode from land_registry_price_paid_uk group by pincode order by avg(price) desc  limit 1;

