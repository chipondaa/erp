
# erp
# cd in to frontend and run the command npm run dev backend 
#cd in to backend and install dependencies in the requirements.txt
make necessary configurations to setting.py......
Configure database .......
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'erp',
        'USER': 'root',
        'PASSWORD': '*****',
        'HOST': '10.10.0.1',  # Use '127.0.0.1' for localhost connections
        'PORT': '3306',  # Default MariaDB port
    }
}

Use 

