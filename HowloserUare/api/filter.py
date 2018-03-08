from vendor.request_params_filter.filter import BaseFilter


class IncomeFilter(BaseFilter):
    fields = {
        'date': 'datetime__startswith',
        'type': 'type'
    }