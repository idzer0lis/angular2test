const errorMessages = {
  'name': {
    'required':      'Name is required.',
    'minlength':     'Name must be at least 4 characters long.',
    'maxlength':     'Name cannot be more than 24 characters long.'
  },
  'password': {
    'required': 'Password is required.',
    'minlength':     'Password must be at least 4 characters long.',
    'maxlength':     'Password cannot be more than 24 characters long.'
  }
};

export function validationMessages(): object {
  return errorMessages;
}

