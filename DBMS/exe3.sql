Question:3 Find the Date with most sales.

Answer:
select transfer_date as date, count(transfer_date)as most_sale  from land_registry_price_paid_uk 
group by date
order by most_sale  desc
limit 1;

Time: 27.829 ms

Result: 
 date    | most_sale 
------------+-----------
 2019-04-26 |      6753
(1 row)

