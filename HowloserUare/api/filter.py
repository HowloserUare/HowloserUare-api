from vendor.request_params_filter.filter import BaseFilter


class IncomeFilter(BaseFilter):
    fields = {
        'date': 'datetime__startswith',
        'type': 'type',
        'min_amount': 'amount__gte',
        'max_amount': 'amount__lte'
    }