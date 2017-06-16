const errorMessages = {
  'name': {
    'required':      'Username is required.',
    'minlength':     'Username must be at least 4 characters long.',
    'maxlength':     'Username cannot be more than 24 characters long.'
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

