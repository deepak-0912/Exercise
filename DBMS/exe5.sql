Question:5 Total sale per month.
Answer:
select extract(month from transfer_date) as month, count(extract(month from transfer_date)) from land_registry_price_paid_uk 
group by month
order by month;

Time: 35.689 ms

Result:
 month | count 
-------+-------
     1 |  2082
     2 |  3551
     3 | 12126
     4 | 38629
     5 | 25784
     6 |   631
     7 |   605
     8 |   700
     9 |   985
    10 |  1264
    11 |  2854
    12 |  3379
(12 rows)

