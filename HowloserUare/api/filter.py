from django.db.models import Q
from django.utils import timezone


income_field = ['date', 'type']


def income_params_queryset(query_params, queryset):
    # reutnr origin queryset if query_params is null
    if not query_params:        
        return queryset
    for field in income_field:
        if field in income_field:
            break
    else:
        return queryset
    # date type
    date = query_params.get('date', False)
    income_type = query_params.get('type', False)
    # init Q object
    Q_obj = Q()
    # date
    if date:
        Q_obj.children.append(('datetime__startswith', date))
    # type
    if income_type:
        Q_obj.connector = 'and'
        Q_obj.children.append(('type', income_type))
    print(Q_obj.children.__len__())
    return queryset.filter(Q_obj).order_by('datetime')

class BaseFilter(object):
    # fields dict, params_name: conditions
    fields = {}

    def __init__(self, query_params, queryset):
        self.q_obj = Q()
        self.query_params = query_params
        self.queryset = queryset
    
    def __filter_field(self, field_name, field_val):
        self.q_obj.children.append((field_name, field_val))

    def __generate_queryset(self,):
        if self.q_obj.children.__len__() > 1:
            self.q_obj.connector = 'and'
        return self.queryset.filter(self.q_obj)

    @property
    def __valid_query_params(self, ):
        """
        Judgment the params is valid or not
        """
        if not self.query_params:
            return False
        for item in self.fields.keys():
            if item in self.query_params:
                return True
        else:
            return False

    @property
    def conditions_queryset(self, ):
        # if params not valid, return origin querset
        if not self.__valid_query_params:
            return self.queryset
        # auto add conditions from fields dict
        for key, val in self.fields:
            pass
        # return a conditional queryset
        return self.__generate_queryset()
    
