Question :6 Find Total sale amount per month per pincode by year.

Answer: 
select postcode, extract(month from transfer_date) as month, count(postcode) from land_registry_price_paid_uk
group by month,postcode
order by postcode;


Time: 275.612 ms

