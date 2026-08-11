def logger(original_function):
    # This is a 'wrapper' function that adds the extra behavior
    def wrapper():
        print(f"--- 🚀 Starting the function: {original_function.__name__} ---")
        original_function() # Run the actual function
        print("--- ✅ Function finished! ---")
    
    return wrapper # Return the newly modified wrapper function

# 2. Define a normal function
def say_hello():
    print("Hello, world!")

# 3. Manually pass 'say_hello' into the 'logger'
modified_say_hello = logger(say_hello)

# 4. Run it
modified_say_hello()
