## Answers to questions of ASSIGNMENT-006

#### 1) What is the difference between var, let, and const?
        var
        ---
        ১. Function scoped নয়
        ২. Redeclare করা যায়

        let
        ----
        ১. Block scoped
        ২. Redeclare করা যায় না, তবে reassign করা যায়

        const
        -----
        ১. Block scoped
        ২. Redeclare করা যায় না
        ৩. Reassign করা যায় না    

#### 2) What is the difference between map(), forEach(), and filter()? 
        forEach()
        --------
        ১. প্রতিটি এলিমেন্টস এর উপর লুপ চালায়
        ২. নতুন কোনো array রিটার্ন করে না

        map()
        -----
        ১. প্রতিটি এলিমেন্টস এর উপর function চালায়
        ২. প্রতিটি এলিমেন্টস এর return value দিয়ে নতুন array তৈরি করে
        ৩. মূল array পরিবর্তন করে না

        filter()
        --------
        ১. প্রতিটি এলিমেন্টস এর উপর condition চেক করে
        ২. যেগুলো true হয় শুধু সেই এলিমেন্টস গুলো দিয়ে নতুন array তৈরি করে
        ৩. মূল array পরিবর্তন করে না
        ৪.ডেটা ফিল্টার করার জন্য ব্যবহার হয়

#### 3) What are arrow functions in ES6?
        Arrow function হলো ES6-এ আনা একটি নতুন ফাংশন লেখার সংক্ষিপ্ত পদ্ধতি। এগুলো => চিহ্ন ব্যবহার করে লেখা হয়।
        ১. Arrow function Syntax ছোট এবং সংক্ষিপ্ত 
        ২. Arrow function এ arguments নেই
        ৩. Arrow function কে constructor ব্যবহার করা যায় না

#### 4) How does destructuring assignment work in ES6?
        ১. Array Destructuring এ ভ্যালুগুলো ইনডেক্সে  আসিনক্রোনাস অনুসারে ভেরিয়েবল এ চলে যায়।
        ২. Object Destructuring ভ্যালুগুলো key নাম মিলিয়ে ভেরিয়েবল এ চলে যায়।
        ৩. Default Value কোনো ভ্যালু না থাকলে আগে থেকে নির্দিষ্ট করা ডিফল্ট ভ্যালু সেট হয়ে যায়।
        ৪. Rest Operator (...)আলাদা করার পর বাকি সব ডেটা একসাথে অন্য একটি ভেরিয়েবল এ রাখা যায়।

#### 5) Explain template literals in ES6. How are they different from string concatenation?
        Template Literals
        ১. Backtick (` `) এবং ${ } ব্যবহার হয়
        ২. মাল্টিপল লাইন লিখা যায়
        ৩. ভ্যারিয়েবল + expression দুটোই  সহজে বসানো যায় 
        ৩. অনেক বেশি সহজ ও পরিষ্কার

        String Concatenation
        ১. + অপারেটর দিয়ে জোড়া দিতে হয়
        ২. মাল্টিপল লাইনের ক্ষেত্রে \n ব্যবহার করতে হয় 
        ৩. শুধু ভ্যারিয়েবল জোড়া দেওয়া যায়
        ৪.  লাইন জটিল ও লম্বা হয়ে যায়

