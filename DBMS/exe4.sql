Question 4:Find number of sales per pincode per year.
Answer:
select postcode, extract(year from transfer_date) as year, count(postcode) from land_registry_price_paid_uk
group by year,postcode
order by postcode;

Time: 282.798 ms

